import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = 'public';
const MIN_BYTES = 400 * 1024; // only touch files > 400KB
const MAX_W = 1920;
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (exts.has(path.extname(p).toLowerCase()) && st.size > MIN_BYTES) acc.push({ p, size: st.size });
  }
  return acc;
}

const files = walk(ROOT).sort((a, b) => b.size - a.size);
let before = 0, after = 0, changed = 0;
const rows = [];

for (const { p, size } of files) {
  before += size;
  const ext = path.extname(p).toLowerCase();
  const input = fs.readFileSync(p);
  let img = sharp(input, { failOn: 'none' });
  const meta = await img.metadata();
  if (meta.width && meta.width > MAX_W) img = img.resize({ width: MAX_W, withoutEnlargement: true });

  let out;
  if (ext === '.jpg' || ext === '.jpeg') out = await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  else if (ext === '.webp') out = await img.webp({ quality: 80 }).toBuffer();
  else out = await img.png({ quality: 82, compressionLevel: 9, palette: true, effort: 8 }).toBuffer();

  // Only overwrite when we actually shrank it — never make a file bigger.
  if (out.length < size) {
    fs.writeFileSync(p, out);
    after += out.length;
    changed++;
    rows.push({ p: p.replace(/\\/g, '/'), from: size, to: out.length });
  } else {
    after += size;
  }
}

rows.sort((a, b) => b.from - a.from);
for (const r of rows.slice(0, 20)) {
  console.log(`  ${(r.from / 1024).toFixed(0).padStart(6)}KB → ${(r.to / 1024).toFixed(0).padStart(5)}KB  ${r.p}`);
}
console.log(`\nScanned ${files.length} files >400KB. Recompressed ${changed}.`);
console.log(`Total: ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB  (saved ${((before - after) / 1048576).toFixed(1)} MB, -${(100 * (before - after) / before).toFixed(0)}%)`);
