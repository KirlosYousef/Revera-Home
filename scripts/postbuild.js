const fs = require('fs');
const path = require('path');

// Read the built index.html
const indexPath = path.join(__dirname, '../build/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Check if script already exists
if (html.includes('Single Page Apps for GitHub Pages')) {
  console.log('✓ GitHub Pages SPA redirect script already exists in index.html');
} else {
  // Script to inject for GitHub Pages SPA routing
  const redirectScript = `
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // This script restores the path from the query string when redirected from 404.html
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>`;

  // Inject script before closing </head> tag (only replace first occurrence)
  html = html.replace('</head>', redirectScript + '\n  </head>');

  // Write back to file
  fs.writeFileSync(indexPath, html, 'utf8');

  console.log('✓ Injected GitHub Pages SPA redirect script into index.html');
}

