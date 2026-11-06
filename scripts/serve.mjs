/**
 * Servidor estático mínimo para previsualizar `out/` en local (sin dependencias).
 * Uso: node scripts/serve.mjs [puerto]
 */
import { createServer } from 'node:http';
import { stat, readFile } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';

const root = join(process.cwd(), 'out');
const port = Number(process.argv[2] || process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
};

async function resolve(path) {
  const file = join(root, normalize(decodeURIComponent(path)).replace(/^[\\/]+/, ''));
  if (!file.startsWith(root)) return null;
  try {
    const s = await stat(file);
    if (s.isDirectory()) return resolve(join(path, 'index.html'));
    return file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let file = await resolve(url.pathname);
  let status = 200;
  if (!file && !extname(url.pathname) && !url.pathname.endsWith('/')) {
    res.writeHead(308, { Location: url.pathname + '/' + url.search });
    return res.end();
  }
  if (!file) {
    file = join(root, '404.html');
    status = 404;
  }
  try {
    const body = await readFile(file);
    res.writeHead(status, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port, () => console.log(`Sirviendo out/ en http://localhost:${port}`));
