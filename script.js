(function () {
  'use strict';

  // Profile photo: show initials if images/profile.jpg is missing or fails to load
  var photo = document.getElementById('photo');
  var img = photo && photo.querySelector('img');
  function useFallback() { photo.classList.add('photo--fallback'); }
  if (img) {
    img.addEventListener('error', useFallback);
    if (img.complete && img.naturalWidth === 0) { useFallback(); }
  }

  // Mobile navigation
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight current section in the nav
  var anchors = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          anchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { io.observe(s); });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
