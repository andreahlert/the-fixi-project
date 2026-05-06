/* The Fixi Project — shared chrome (banner / topbar / footer).
 * One source of truth, ~50 lines, zero deps.
 * Reads body[data-theme] to render per-page emoji + active nav. */
(() => {
  const META = {
    home:  { emoji: '🧰', repo: 'the-fixi-project' },
    fixi:  { emoji: '🚲', repo: 'fixi'  },
    moxi:  { emoji: '🥊', repo: 'moxi'  },
    paxi:  { emoji: '♻️', repo: 'paxi'  },
    ssexi: { emoji: '📡', repo: 'ssexi' },
    rexi:  { emoji: '🐕', repo: 'rexi'  },
  };
  const NAV = [
    ['Guide', 'index.html', 'home'],
    ['fixi',  'fixi.html',  'fixi'],
    ['moxi',  'moxi.html',  'moxi'],
    ['paxi',  'paxi.html',  'paxi'],
    ['ssexi', 'ssexi.html', 'ssexi'],
    ['rexi',  'rexi.html',  'rexi'],
  ];
  const theme = document.body.dataset.theme || 'fixi';
  const { emoji, repo } = META[theme] || META.fixi;

  const banner = `
    <div class="banner"><div class="banner-inner">
      <span class="pill">NEW</span>
      <span>fixi 1.0 just shipped</span>
      <a href="fixi.html">read more →</a>
    </div></div>`;

  const topbar = `
    <div class="topbar">
      <a class="brand" href="index.html"><span class="logo">${emoji}</span><span>The Fixi Project</span></a>
      <nav>${NAV.map(([label, href, key]) =>
        `<a href="${href}"${key === theme ? ' class="current"' : ''}>${label}</a>`
      ).join('')}</nav>
      <a class="gh-pill" href="https://github.com/bigskysoftware/${repo}">★ on GitHub</a>
    </div>`;

  const footer = `
    <footer><div class="foot-card">
      <div class="blurb">
        <strong>${emoji} The Fixi Project</strong>
        Five tiny hypermedia libraries that fit in your head and your bundle. Hand-rolled by Big Sky Software.
      </div>
      <div><h4>Libraries</h4><ul>
        <li><a href="fixi.html">fixi</a></li>
        <li><a href="moxi.html">moxi</a></li>
        <li><a href="paxi.html">paxi</a></li>
        <li><a href="ssexi.html">ssexi</a></li>
        <li><a href="rexi.html">rexi</a></li>
      </ul></div>
      <div><h4>Reading</h4><ul>
        <li><a href="index.html">Guide</a></li>
        <li><a href="https://htmx.org/essays">Essays</a></li>
      </ul></div>
      <div><h4>Elsewhere</h4><ul>
        <li><a href="https://github.com/bigskysoftware">GitHub</a></li>
        <li><a href="https://htmx.org/discord">Discord</a></li>
      </ul></div>
    </div>
    <div class="imprint">© Big Sky Software · BSD-0 · Made with attributes, not abstractions.</div>
    </footer>`;

  const slot = (sel, html) => {
    const el = document.querySelector(sel);
    if (el) el.outerHTML = html;
  };
  slot('[data-chrome="banner"]', banner);
  slot('[data-chrome="topbar"]', topbar);
  slot('[data-chrome="footer"]', footer);
})();
