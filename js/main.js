/* Page behavior: projects, filters, detail pages, lightbox, code blocks, icons, contact form. */
(function () {
  'use strict';
  var config = window.SITE_CONFIG || {};
  var projects = window.PROJECTS || [];

  /* ---------- helpers ---------- */
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') { n.textContent = attrs[k]; } else if (attrs[k] !== null && attrs[k] !== undefined) { n.setAttribute(k, attrs[k]); }
    });
    (children || []).forEach(function (c) { if (c) { n.appendChild(c); } });
    return n;
  }
  function ul(items, cls) { return el('ul', { 'class': cls || 'plain' }, items.map(function (t) { return el('li', { text: t }); })); }
  function byId(id) { return projects.filter(function (p) { return p.id === id; })[0]; }
  function href(p) { return 'project.html?id=' + encodeURIComponent(p.id); }
  function join(a) { return (a && a.length) ? a.join(', ') : ''; }
  function thumb(p) { return p.gallery && p.gallery[0]; }
  function stackLine(p) {
    var m = p.matrix || {}; var all = [].concat(m.frontend || [], m.backend || [], m.database || []);
    var seen = {}; return all.filter(function (x) { if (seen[x]) { return false; } seen[x] = 1; return true; }).slice(0, 6).join(' · ');
  }

  /* ---------- navigation ---------- */
  var toggle = document.getElementById('navToggle'), links = document.getElementById('navLinks');
  function closeMenu() { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  if (toggle && links) {
    toggle.addEventListener('click', function () { toggle.setAttribute('aria-expanded', String(links.classList.toggle('open'))); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && links.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  }

  /* ---------- profile photo fallback ---------- */
  var photo = document.getElementById('photo'), pimg = photo && photo.querySelector('img');
  if (pimg) {
    var fb = function () { photo.classList.add('photo--fallback'); };
    pimg.addEventListener('error', fb); if (pimg.complete && pimg.naturalWidth === 0) { fb(); }
  }

  /* ---------- technology icons (Devicon, pinned version; hidden if a file is missing) ---------- */
  var DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
  Array.prototype.forEach.call(document.querySelectorAll('.tech li[data-icon]'), function (li) {
    var name = li.getAttribute('data-icon'), file = name.indexOf('/') > -1 ? name : name + '/' + name + '-original';
    var im = el('img', { src: DEVICON + file + '.svg', alt: '', width: '20', height: '20', loading: 'lazy' });
    im.addEventListener('error', function () { im.remove(); });
    li.insertBefore(im, li.firstChild);
  });

  /* ---------- lightbox (native dialog) ---------- */
  var lb = null, lbItems = [], lbIndex = 0, lbOpener = null;
  function buildLightbox() {
    var dlg = el('dialog', { 'class': 'lb', 'aria-label': 'Image preview' });
    var prev = el('button', { type: 'button', text: 'Previous' }), next = el('button', { type: 'button', text: 'Next' });
    var size = el('button', { type: 'button', text: 'Actual size', 'aria-pressed': 'false' }), close = el('button', { type: 'button', text: 'Close' });
    var cap = el('p', { 'class': 'lb__cap', 'aria-live': 'polite' }); cap.style.margin = '0';
    var stage = el('div', { 'class': 'lb__stage', tabindex: '0' }), im = el('img', { alt: '' }); stage.appendChild(im);
    dlg.appendChild(el('div', { 'class': 'lb__bar' }, [cap, prev, next, size, close])); dlg.appendChild(stage);
    function show(i) {
      lbIndex = (i + lbItems.length) % lbItems.length; var it = lbItems[lbIndex];
      im.src = it.src; im.alt = it.alt; cap.textContent = (lbItems.length > 1 ? (lbIndex + 1) + ' of ' + lbItems.length + '. ' : '') + (it.caption || it.alt);
      prev.disabled = next.disabled = lbItems.length < 2; stage.scrollTo(0, 0);
    }
    prev.addEventListener('click', function () { show(lbIndex - 1); });
    next.addEventListener('click', function () { show(lbIndex + 1); });
    size.addEventListener('click', function () {
      var on = dlg.classList.toggle('lb--actual'); size.setAttribute('aria-pressed', String(on)); size.textContent = on ? 'Fit to window' : 'Actual size';
    });
    close.addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) { dlg.close(); } });
    dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight' && lbItems.length > 1) { show(lbIndex + 1); } if (e.key === 'ArrowLeft' && lbItems.length > 1) { show(lbIndex - 1); } });
    dlg.addEventListener('close', function () { if (lbOpener) { lbOpener.focus(); } });
    document.body.appendChild(dlg); dlg._show = show; dlg._size = size; return dlg;
  }
  function openLightbox(items, index, actual, opener) {
    if (!lb) { lb = buildLightbox(); }
    lbItems = items; lbOpener = opener;
    lb.classList.toggle('lb--actual', !!actual); lb._size.setAttribute('aria-pressed', String(!!actual)); lb._size.textContent = actual ? 'Fit to window' : 'Actual size';
    lb._show(index); lb.showModal();
  }

  /* ---------- home: featured projects ---------- */
  var feat = document.getElementById('featured');
  if (feat) {
    projects.filter(function (p) { return p.featured; }).forEach(function (p, i) {
      var t = thumb(p), card = el('article', { 'class': 'fp' + (i === 0 ? ' fp--lead' : '') });
      if (t) { card.appendChild(el('a', { 'class': 'fp__img', href: href(p), tabindex: '-1', 'aria-hidden': 'true' }, [el('img', { src: t.src, alt: '', width: '640', height: '400', loading: i === 0 ? 'eager' : 'lazy' })])); }
      var body = el('div', { 'class': 'fp__body' });
      body.appendChild(el('p', { 'class': 'meta mono', text: p.type + ' · ' + p.status }));
      body.appendChild(el('h3', {}, [el('a', { href: href(p), text: p.name })]));
      body.appendChild(el('p', { text: p.summary }));
      body.appendChild(el('p', { 'class': 'stack mono', text: stackLine(p) }));
      body.appendChild(el('a', { 'class': 'btn btn--ghost btn--small', href: href(p), text: 'View project details' }));
      card.appendChild(body); feat.appendChild(card);
    });
  }

  /* ---------- projects page: list + filter ---------- */
  var rows = document.getElementById('projectRows');
  if (rows) {
    projects.forEach(function (p) {
      var t = thumb(p), row = el('article', { 'class': 'row', 'data-tags': (p.tags || []).join(' ') });
      if (t) { row.appendChild(el('a', { 'class': 'row__thumb', href: href(p), tabindex: '-1', 'aria-hidden': 'true' }, [el('img', { src: t.src, alt: '', width: '640', height: '400', loading: 'lazy' })])); }
      var b = el('div');
      b.appendChild(el('p', { 'class': 'meta mono', text: p.type + ' · ' + p.status }));
      b.appendChild(el('h2', {}, [el('a', { href: href(p), text: p.name })]));
      b.appendChild(el('p', { 'class': 'row__sub', text: p.subtitle }));
      b.appendChild(el('p', { text: p.summary }));
      b.appendChild(el('p', { 'class': 'stack mono', text: stackLine(p) }));
      var lk = el('div', { 'class': 'row__links' }, [el('a', { 'class': 'btn btn--ghost btn--small', href: href(p), text: 'View project details' })]);
      if (p.repo) { lk.appendChild(el('a', { href: p.repo, target: '_blank', rel: 'noopener noreferrer', text: 'GitHub repository' })); }
      if (p.demo) { lk.appendChild(el('a', { href: p.demo, target: '_blank', rel: 'noopener noreferrer', text: 'Live demo' })); }
      b.appendChild(lk); row.appendChild(b); rows.appendChild(row);
    });
    var chips = document.querySelectorAll('.chip'), count = document.getElementById('count');
    function apply(tag) {
      var shown = 0;
      Array.prototype.forEach.call(rows.children, function (r) {
        var ok = tag === 'all' || (' ' + r.getAttribute('data-tags') + ' ').indexOf(' ' + tag + ' ') > -1; r.hidden = !ok; if (ok) { shown++; }
      });
      count.textContent = 'Showing ' + shown + ' of ' + projects.length + ' projects';
    }
    Array.prototype.forEach.call(chips, function (c) {
      c.addEventListener('click', function () {
        Array.prototype.forEach.call(chips, function (x) { x.setAttribute('aria-pressed', String(x === c)); }); apply(c.getAttribute('data-filter'));
      });
    });
    apply('all');
  }

  /* ---------- technology matrix ---------- */
  var mx = document.getElementById('matrix');
  if (mx) {
    var cols = [['frontend', 'Front-end'], ['backend', 'Back-end'], ['database', 'Database'], ['environment', 'Dev environment'], ['hosting', 'Hosting and deployment']];
    var thead = el('thead', {}, [el('tr', {}, [el('th', { scope: 'col', text: 'Project' })].concat(cols.map(function (c) { return el('th', { scope: 'col', text: c[1] }); })))]);
    var tbody = el('tbody');
    projects.forEach(function (p) {
      var tr = el('tr', {}, [el('th', { scope: 'row' }, [el('a', { href: href(p), text: p.name })])]);
      cols.forEach(function (c) {
        var vals = (p.matrix || {})[c[0]] || [];
        var td = el('td', { 'data-label': c[1] });
        if (vals.length) { vals.forEach(function (v) { td.appendChild(el('span', { text: v })); }); } else { td.className = 'no'; td.appendChild(el('span', { text: '—', 'aria-label': 'not documented' })); }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    mx.appendChild(thead); mx.appendChild(tbody);
  }

  /* ---------- code block: highlight + copy ---------- */
  var TOKEN = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\$\w+)|\b(function|return|if|else|elseif|foreach|for|while|exit|null|true|false|static|string|array|int|bool|void|empty|isset|new|use)\b|(\b[A-Za-z_]\w*)(?=\()|(\b\d+\b)/g;
  var CLS = [null, 'tk-c', 'tk-s', 'tk-v', 'tk-k', 'tk-f', 'tk-n'];
  function highlight(code) {
    var out = document.createDocumentFragment(), last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(code)) !== null) {
      if (m.index > last) { out.appendChild(document.createTextNode(code.slice(last, m.index))); }
      var k = 1; while (!m[k]) { k++; }
      out.appendChild(el('span', { 'class': CLS[k], text: m[0] })); last = TOKEN.lastIndex;
    }
    out.appendChild(document.createTextNode(code.slice(last))); return out;
  }
  function codeBlock(c) {
    var status = el('span', { 'class': 'sr-only', 'aria-live': 'polite' });
    var btn = el('button', { type: 'button', text: 'Copy code' });
    btn.addEventListener('click', function () {
      function done() { btn.textContent = 'Copied'; status.textContent = 'Code copied to clipboard'; setTimeout(function () { btn.textContent = 'Copy code'; status.textContent = ''; }, 2000); }
      function fallback() {
        var ta = el('textarea', { 'aria-hidden': 'true' }); ta.value = c.text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { btn.textContent = 'Copy failed'; } ta.remove();
      }
      if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(c.text).then(done, fallback); } else { fallback(); }
    });
    var pre = el('pre', { tabindex: '0' }), code = el('code', { 'class': 'language-' + c.lang }); code.appendChild(highlight(c.text)); pre.appendChild(code);
    return el('div', { 'class': 'codebox' }, [el('div', { 'class': 'codebox__bar' }, [el('span', { text: c.file }), btn, status]), pre]);
  }

  /* ---------- project detail page ---------- */
  var detail = document.getElementById('projectDetail');
  if (detail) {
    var p = byId(new URLSearchParams(window.location.search).get('id'));
    if (!p) {
      detail.appendChild(el('h1', { text: 'Project not found' }));
      detail.appendChild(el('p', {}, [el('a', { href: 'projects.html', text: 'See all projects' })]));
    } else {
      document.title = p.name + ' | Kriszia Mae Pamintuan';
      var desc = document.querySelector('meta[name="description"]'); if (desc) { desc.setAttribute('content', p.name + ': ' + p.summary); }
      var sec = function (title, nodes) { return el('section', { 'class': 'dsec' }, [el('h2', { text: title })].concat(nodes)); };
      var main = el('div', { 'class': 'detail__main' });
      main.appendChild(sec('Project overview', [el('p', { text: p.summary })]));
      main.appendChild(sec('Problem or objective', [el('p', { text: p.purpose })]));
      main.appendChild(sec('My role and contribution', [el('p', { text: p.role })]));
      main.appendChild(sec('System features', [ul(p.features)]));
      var dl = el('dl', { 'class': 'techgrid' });
      Object.keys(p.stack).forEach(function (k) { dl.appendChild(el('dt', { text: k })); dl.appendChild(el('dd', { 'class': 'mono', text: p.stack[k].join(', ') })); });
      main.appendChild(sec('Technologies and development tools', [dl]));

      function figure(img, btnText, actual) {
        var im = el('img', { src: img.src, alt: img.alt, loading: 'lazy' });
        var open = el('button', { type: 'button', 'class': 'figure__btn', 'aria-label': 'Open full size: ' + img.alt }, [im]);
        open.addEventListener('click', function () { openLightbox([img], 0, actual, open); });
        var f = el('figure', { 'class': 'figure' }, [open]); if (img.caption) { f.appendChild(el('figcaption', { text: img.caption })); } return f;
      }
      if (p.architecture) { main.appendChild(sec('System architecture', [figure(p.architecture, '', false)])); }
      if (p.database) {
        var d = p.database, fig = figure(d.overview, '', false);
        var big = el('button', { type: 'button', 'class': 'btn btn--ghost btn--small', text: 'Open the full-size detailed diagram' });
        big.addEventListener('click', function () { openLightbox([d.detailed], 0, true, big); });
        var names = Object.keys(d.tables).map(function (t) { return el('li', { 'class': 'mono', text: t + ' (' + d.tables[t].join(', ') + ')' }); });
        var det = el('details', { 'class': 'tablelist' }, [el('summary', { text: 'Text version: all ' + names.length + ' tables and their columns' }), el('ul', {}, names)]);
        main.appendChild(sec('Database design', [fig, el('div', { 'class': 'figure__bar' }, [big]), el('p', { 'class': 'note', text: d.note }), det]));
      }
      if (p.permissions) {
        var tb = el('tbody'); p.permissions.rows.forEach(function (r) { tb.appendChild(el('tr', {}, [el('th', { scope: 'row', text: r[0] }), el('td', { text: r[1] }), el('td', { text: r[2] })])); });
        var tbl = el('table', {}, [el('caption', { 'class': 'sr-only', text: 'What each role can do' }), el('thead', {}, [el('tr', {}, ['Action', 'Administrator', 'Responder'].map(function (h) { return el('th', { scope: 'col', text: h }); }))]), tb]);
        main.appendChild(sec('Roles and permissions', [el('div', { 'class': 'tbl-wrap' }, [tbl]), el('p', { 'class': 'note', text: p.permissions.note })]));
      }
      if (p.code) { main.appendChild(sec('Code excerpt: authentication and access control', [codeBlock(p.code), ul(p.code.explain)])); }
      if (p.gallery && p.gallery.length) {
        var g = el('ul', { 'class': 'gallery' });
        p.gallery.forEach(function (it, i) {
          var b = el('button', { type: 'button', 'aria-label': 'Open image ' + (i + 1) + ' of ' + p.gallery.length + ': ' + it.alt }, [el('img', { src: it.src, alt: '', loading: 'lazy', width: '640', height: '400' })]);
          b.addEventListener('click', function () { openLightbox(p.gallery, i, false, b); });
          var f = el('figure', {}, [b]); if (it.caption) { f.appendChild(el('figcaption', { text: it.caption })); } g.appendChild(el('li', {}, [f]));
        });
        main.appendChild(sec('Screenshots', (p.imageNote ? [el('p', { 'class': 'note', text: p.imageNote })] : []).concat([g])));
      }
      var tn = [];
      if (p.testing) { tn.push(el('p', { text: p.testing })); }
      if (p.troubleshooting) {
        tn.push(el('h3', { text: 'Troubleshooting HTTP 500 and 404 errors' })); tn.push(el('p', { text: p.troubleshooting.intro }));
        tn.push(el('p', { text: 'The review pointed to three things that can cause these errors:' })); tn.push(ul(p.troubleshooting.findings, 'plain'));
      }
      if (tn.length) { main.appendChild(sec('Testing and troubleshooting', tn)); }
      if (p.deployment) { main.appendChild(sec('Deployment', [el('p', { text: p.deployment })])); }
      main.appendChild(sec('Project status', [el('p', { text: p.type + '. Status: ' + p.status + '.' })]));

      var m = p.matrix || {}, ds = el('dl'), add = function (k, v) { if (v) { ds.appendChild(el('dt', { text: k })); ds.appendChild(el('dd', { text: v })); } };
      add('Type', p.type); add('Status', p.status); add('Front-end', join(m.frontend)); add('Back-end', join(m.backend)); add('Database', join(m.database)); add('Hosting', join(m.hosting));
      var aside = el('aside', { 'class': 'datasheet', 'aria-label': 'Project summary' }, [el('h2', { text: 'At a glance' }), ds]);
      if (p.repo) { aside.appendChild(el('a', { 'class': 'btn btn--ghost btn--small', href: p.repo, target: '_blank', rel: 'noopener noreferrer', text: 'GitHub repository' })); }
      if (p.demo) { aside.appendChild(el('a', { 'class': 'btn btn--primary btn--small', href: p.demo, target: '_blank', rel: 'noopener noreferrer', text: 'Live demo' })); }
      var head = el('header', { 'class': 'detail__head' }, [el('p', { 'class': 'meta mono', text: p.type + ' · ' + p.status }), el('h1', { text: p.name }), el('p', { text: p.subtitle })]);
      detail.appendChild(el('p', { 'class': 'crumb' }, [el('a', { href: 'projects.html', text: 'All projects' })]));
      detail.appendChild(el('div', { 'class': 'detail' }, [head, aside, main]));
    }
  }

  /* ---------- contact form ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus'), btn = document.getElementById('sendBtn'), emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var rules = {
      name: function (v) { return v.trim() ? '' : 'Enter your full name.'; },
      email: function (v) { return !v.trim() ? 'Enter your email address.' : (emailOk.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.'); },
      subject: function (v) { return v.trim() ? '' : 'Enter a subject.'; },
      message: function (v) { return v.trim().length >= 10 ? '' : 'Write a message of at least 10 characters.'; }
    };
    var check = function (f) {
      var input = form.elements[f], msg = rules[f](input.value), out = document.getElementById(f + '-error');
      out.textContent = msg; out.hidden = !msg; if (msg) { input.setAttribute('aria-invalid', 'true'); } else { input.removeAttribute('aria-invalid'); } return !msg;
    };
    Object.keys(rules).forEach(function (f) {
      form.elements[f].addEventListener('blur', function () { check(f); });
      form.elements[f].addEventListener('input', function () { if (form.elements[f].getAttribute('aria-invalid')) { check(f); } });
    });
    var show = function (kind, text) { status.className = 'status ' + (kind === 'ok' ? 'is-ok' : 'is-fail'); status.textContent = text; status.focus(); };
    form.addEventListener('submit', function (e) {
      e.preventDefault(); status.className = 'status'; status.textContent = '';
      var bad = null; Object.keys(rules).forEach(function (f) { if (!check(f) && !bad) { bad = form.elements[f]; } });
      if (bad) { bad.focus(); return; }
      if (form.elements._gotcha.value) { return; }
      var mail = 'You can email me directly at ' + config.email + '.';
      if (!config.formEndpoint) { show('fail', 'The message form is not connected yet, so your message was not sent. ' + mail); return; }
      btn.disabled = true; btn.textContent = 'Sending...';
      fetch(config.formEndpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) { throw new Error('HTTP ' + r.status); } form.reset(); show('ok', 'Thank you. Your message was sent and I will reply by email.'); })
        .catch(function () { show('fail', 'Your message could not be sent. Please try again, or ' + mail.charAt(0).toLowerCase() + mail.slice(1)); })
        .then(function () { btn.disabled = false; btn.textContent = 'Send message'; });
    });
  }
})();
