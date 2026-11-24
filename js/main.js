(function () {
  'use strict';

  var config = window.SITE_CONFIG || {};
  var projects = window.PROJECTS || [];

  /* ---------- small DOM helper ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') { node.textContent = attrs[k]; }
      else { node.setAttribute(k, attrs[k]); }
    });
    (children || []).forEach(function (c) { if (c) { node.appendChild(c); } });
    return node;
  }
  function list(tag, items) {
    return el(tag, {}, items.map(function (t) { return el('li', { text: t }); }));
  }
  function stackSummary(p) {
    var all = [];
    Object.keys(p.stack || {}).forEach(function (k) { all = all.concat(p.stack[k]); });
    return all.slice(0, 7).join(', ');
  }

  /* ---------- footer year, photo fallback ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.year'), function (n) {
    n.textContent = new Date().getFullYear();
  });
  var photo = document.getElementById('photo');
  var img = photo && photo.querySelector('img');
  if (img) {
    var fallback = function () { photo.classList.add('photo--fallback'); };
    img.addEventListener('error', fallback);
    if (img.complete && img.naturalWidth === 0) { fallback(); }
  }

  /* ---------- navigation ---------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  function closeMenu() {
    if (!links) { return; }
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) { if (e.target.tagName === 'A') { closeMenu(); } });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { closeMenu(); toggle.focus(); }
    });
  }
  var sections = document.querySelectorAll('main section[id]');
  if (sections.length && 'IntersectionObserver' in window) {
    var navAnchors = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        navAnchors.forEach(function (a) {
          if (a.getAttribute('href') === '#' + entry.target.id) { a.setAttribute('aria-current', 'true'); }
          else { a.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- project list (home page) ---------- */
  var listBox = document.getElementById('projectList');
  if (listBox) {
    projects.forEach(function (p) {
      var card = el('article', { 'class': 'project' });
      card.appendChild(el('p', { 'class': 'project__meta' }, [
        el('span', { text: p.type }), el('span', { text: 'Status: ' + p.status })
      ]));
      card.appendChild(el('h3', { text: p.name }));
      if (p.subtitle) { card.appendChild(el('p', { 'class': 'project__sub', text: p.subtitle })); }
      if (p.images && p.images.length) {
        card.insertBefore(el('img', { 'class': 'project__thumb', src: p.images[0].src, alt: p.images[0].alt, width: '640', height: '400', loading: 'lazy' }), card.firstChild);
      }
      card.appendChild(el('p', { text: p.summary }));
      card.appendChild(el('p', { 'class': 'project__stack', text: 'Built with: ' + stackSummary(p) }));
      var actions = el('div', { 'class': 'project__links' });
      actions.appendChild(el('a', { 'class': 'btn btn--secondary', href: 'project.html?id=' + encodeURIComponent(p.id), text: 'View project details' }));
      if (p.repo) { actions.appendChild(el('a', { href: p.repo, target: '_blank', rel: 'noopener noreferrer', text: 'GitHub repository' })); }
      if (p.demo) { actions.appendChild(el('a', { href: p.demo, target: '_blank', rel: 'noopener noreferrer', text: 'Live demo' })); }
      card.appendChild(actions);
      listBox.appendChild(card);
    });
  }

  /* ---------- project detail page ---------- */
  var detail = document.getElementById('projectDetail');
  if (detail) {
    var id = new URLSearchParams(window.location.search).get('id');
    var p = projects.filter(function (x) { return x.id === id; })[0];
    detail.textContent = '';
    detail.appendChild(el('p', {}, [el('a', { href: 'index.html#projects', text: 'Back to projects' })]));
    if (!p) {
      detail.appendChild(el('h1', { text: 'Project not found' }));
      detail.appendChild(el('p', {}, [el('a', { href: 'index.html#projects', text: 'See all projects' })]));
    } else {
      document.title = p.name + ' | Kriszia Mae Pamintuan';
      var art = el('article', { 'class': 'detail' });
      art.appendChild(el('h1', { text: p.name }));
      if (p.subtitle) { art.appendChild(el('p', { 'class': 'project__sub', text: p.subtitle })); }
      art.appendChild(el('p', { 'class': 'project__meta' }, [el('span', { text: p.type }), el('span', { text: 'Status: ' + p.status })]));
      var add = function (title, content) {
        if (!content) { return; }
        art.appendChild(el('section', {}, [el('h2', { text: title }), content]));
      };
      add('Overview', el('p', { text: p.summary }));
      add('Problem or objective', el('p', { text: p.purpose }));
      add('My responsibilities', el('p', { text: p.role }));
      add('System features', p.features && p.features.length ? list('ul', p.features) : null);
      if (p.stack) {
        var dl = el('dl');
        Object.keys(p.stack).forEach(function (k) {
          dl.appendChild(el('dt', { text: k }));
          dl.appendChild(el('dd', { text: p.stack[k].join(', ') }));
        });
        add('Technologies and tools', dl);
      }
      add('Development process', p.process && p.process.length ? list('ol', p.process) : null);
      if (p.images && p.images.length) {
        var shots = el('ul', { 'class': 'gallery' });
        p.images.forEach(function (im) {
          var fig = el('figure', {}, [el('img', { src: im.src, alt: im.alt, width: '640', height: '400', loading: 'lazy' })]);
          if (im.caption) { fig.appendChild(el('figcaption', { text: im.caption })); }
          shots.appendChild(el('li', {}, [fig]));
        });
        add('Screenshots', shots);
      }
      add('Testing and deployment', p.testing ? el('p', { text: p.testing }) : null);
      add('Project status', el('p', { text: p.status }));
      if (p.repo || p.demo) {
        var l = el('div', { 'class': 'project__links' });
        if (p.repo) { l.appendChild(el('a', { href: p.repo, target: '_blank', rel: 'noopener noreferrer', text: 'GitHub repository' })); }
        if (p.demo) { l.appendChild(el('a', { href: p.demo, target: '_blank', rel: 'noopener noreferrer', text: 'Live demo' })); }
        art.appendChild(l);
      }
      detail.appendChild(art);
    }
  }

  /* ---------- contact form ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var btn = document.getElementById('sendBtn');
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var rules = {
      name: function (v) { return v.trim() ? '' : 'Enter your full name.'; },
      email: function (v) { return !v.trim() ? 'Enter your email address.' : (emailOk.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.'); },
      subject: function (v) { return v.trim() ? '' : 'Enter a subject.'; },
      message: function (v) { return v.trim().length >= 10 ? '' : 'Write a message of at least 10 characters.'; }
    };
    function check(field) {
      var input = form.elements[field];
      var msg = rules[field](input.value);
      var out = document.getElementById(field + '-error');
      out.textContent = msg;
      out.hidden = !msg;
      if (msg) { input.setAttribute('aria-invalid', 'true'); } else { input.removeAttribute('aria-invalid'); }
      return !msg;
    }
    Object.keys(rules).forEach(function (f) {
      form.elements[f].addEventListener('blur', function () { check(f); });
      form.elements[f].addEventListener('input', function () { if (form.elements[f].getAttribute('aria-invalid')) { check(f); } });
    });
    function show(kind, text) {
      status.className = 'status ' + (kind === 'ok' ? 'is-ok' : 'is-fail');
      status.textContent = text;
      status.focus();
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'status';
      status.textContent = '';
      var firstBad = null;
      Object.keys(rules).forEach(function (f) { if (!check(f) && !firstBad) { firstBad = form.elements[f]; } });
      if (firstBad) { firstBad.focus(); return; }
      if (form.elements._gotcha.value) { return; } // spam bot filled the hidden field
      var mailFallback = 'You can email me directly at ' + (config.email || '') + '.';
      if (!config.formEndpoint) {
        show('fail', 'The message form is not connected yet, so your message was not sent. ' + mailFallback);
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Sending...';
      fetch(config.formEndpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (!res.ok) { throw new Error('HTTP ' + res.status); }
          form.reset();
          show('ok', 'Thank you. Your message was sent and I will reply by email.');
        })
        .catch(function () { show('fail', 'Your message could not be sent. Please try again, or ' + mailFallback.charAt(0).toLowerCase() + mailFallback.slice(1)); })
        .then(function () { btn.disabled = false; btn.textContent = 'Send message'; });
    });
  }
})();
