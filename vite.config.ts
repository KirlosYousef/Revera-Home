import { defineConfig } from 'vite';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',
    target: 'esnext',
  },
  plugins: [
    {
      name: 'github-pages-fallback',
      closeBundle() {
        const indexPath = path.resolve(process.cwd(), 'build/index.html');
        const indexContent = readFileSync(indexPath, 'utf8');
        const redirectScript = `<script>
          (function () {
            var pathname = window.location.pathname;
            if (pathname && pathname !== '/' && pathname !== '/index.html') {
              history.replaceState(null, '', pathname);
            }
          })();
        </script>`;
        writeFileSync(path.resolve(process.cwd(), 'build/404.html'), indexContent.replace('</head>', `${redirectScript}</head>`));
        writeFileSync(path.resolve(process.cwd(), 'build/.nojekyll'), '');
      },
    },
  ],
});
