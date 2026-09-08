import http from 'http';
import { AddressInfo } from 'net';
import { createClient } from '@supabase/supabase-js';
import captured from './fixtures/social-topics-2026-09-07.json';
const { publishSocialTopics } = require('../netlify/functions/lib/social-publisher');

// A controlled HTTP data service exercises the real Supabase client and publisher.
describe('social publication continuity', () => {
  let server: http.Server;
  let client: ReturnType<typeof createClient>;
  let rows: Array<{ id: string; active: boolean; [key: string]: unknown }>;
  let failedMethod: string;

  beforeEach(async () => {
    rows = [{ id: 'previous-selection', active: true }];
    failedMethod = '';
    server = http.createServer(async (request, response) => {
      response.setHeader('Content-Type', 'application/json');
      if (request.method === failedMethod) {
        response.statusCode = 500;
        response.end(JSON.stringify({ message: 'Controlled storage failure' }));
        return;
      }
      const url = new URL(request.url!, 'http://localhost');
      if (url.pathname !== '/rest/v1/trending_topics') { response.writeHead(404).end(); return; }
      const chunks = [];
      for await (const chunk of request) chunks.push(chunk);
      const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : null;
      if (request.method === 'GET') {
        response.end(JSON.stringify(rows.filter(row => row.active).map(row => ({ id: row.id }))));
      } else if (request.method === 'POST') {
        const inserted = body.map((row: object, index: number) => ({ ...row, id: `new-${index}` }));
        rows.push(...inserted);
        response.writeHead(201).end(JSON.stringify(inserted.map((row: { id: string }) => ({ id: row.id }))));
      } else if (request.method === 'PATCH') {
        const ids = url.searchParams.get('id')!.slice(4, -1).split(',');
        rows.forEach(row => { if (ids.includes(row.id)) Object.assign(row, body); });
        response.writeHead(204).end();
      }
    });
    await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
    client = createClient(`http://127.0.0.1:${(server.address() as AddressInfo).port}`, 'controlled-test-key');
  });

  afterEach(async () => {
    server.closeAllConnections();
    await new Promise<void>(resolve => server.close(() => resolve()));
  });

  test('publishes all three original social links before retiring the previous selection', async () => {
    expect(await publishSocialTopics(client, captured)).toBe(3);
    expect(rows.filter(row => row.active).map(row => row.url)).toEqual(captured.map(topic => topic.url));
    expect(rows[0].active).toBe(false);
    expect(rows.slice(1).every(row => !('evidence' in row))).toBe(true);
  });

  test.each(['POST', 'PATCH'])('retains the previous active selection on %s failure', async method => {
    failedMethod = method;
    await expect(publishSocialTopics(client, captured)).rejects.toThrow('Controlled storage failure');
    expect(rows.filter(row => row.active).map(row => row.id)).toEqual(['previous-selection']);
  });

  test('an empty refresh cannot clear the published section', async () => {
    await expect(publishSocialTopics(client, [])).rejects.toThrow('At least three');
    expect(rows.filter(row => row.active).map(row => row.id)).toEqual(['previous-selection']);
  });
});
