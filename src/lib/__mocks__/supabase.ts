// Mock Supabase client for tests
export const supabase = {
  from: jest.fn().mockImplementation(() => {
    // Create a chainable mock object with all methods. Self-referencing
    // methods are attached after creation so the initializer is legal TS.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockChain: any = {
      select: jest.fn(),
      insert: jest.fn().mockImplementation(() => ({
        select: jest.fn().mockReturnValue({
          data: [{ id: 'test-id' }],
          error: null
        })
      })),
      update: jest.fn(),
      delete: jest.fn(),
      eq: jest.fn(),
      or: jest.fn(),
      gte: jest.fn(),
      order: jest.fn(),
      limit: jest.fn().mockResolvedValue({
        data: [{
          id: 'test-event-1',
          title: 'Cultural Festival',
          description: 'Test event',
          location: 'San Luis Potosí',
          start_date: '2025-01-01',
          end_date: '2025-01-03',
          category: 'cultural'
        }],
        error: null
      })
    };
    for (const m of ['select', 'update', 'delete', 'eq', 'or', 'gte', 'order']) {
      mockChain[m].mockReturnValue(mockChain);
    }

    return mockChain;
  })
};