// Mark JS as active (enables fade-in animations)
document.documentElement.classList.add('js-ready');

// ── Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
let cursorActive = false;

function showCursor() {
  if (!cursorActive) {
    cursorActive = true;
    cursor.style.opacity = '1';
    ring.style.opacity = '0.5';
  }
}
function hideCursor() {
  cursorActive = false;
  cursor.style.opacity = '0';
  ring.style.opacity = '0';
}

function updateCursorPosition(x, y) {
  mx = x; my = y;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
}

// Mouse support
document.addEventListener('mousemove', e => {
  showCursor();
  updateCursorPosition(e.clientX, e.clientY);
});

// Touch support — follow finger while touching, hide on release
document.addEventListener('touchstart', e => {
  if (e.touches.length > 0) {
    showCursor();
    updateCursorPosition(e.touches[0].clientX, e.touches[0].clientY);
    rx = mx; ry = my;
  }
}, { passive: true });

document.addEventListener('touchmove', e => {
  if (e.touches.length > 0) {
    updateCursorPosition(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });

document.addEventListener('touchend', hideCursor);
document.addEventListener('touchcancel', hideCursor);

// Start hidden until first interaction
hideCursor();

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .studio-card, .expertise-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    ring.style.width = '52px';
    ring.style.height = '52px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});

// ── Nav active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── Intersection observer for fade-in and bar animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-bar-fill, .toolkit-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Trigger bars in hero on load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.hero-right .toolkit-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 400);
});

// ── Download CV
function downloadCV() {
  window.open('assets/Faiz_Karol_CV.pdf', '_blank');
}
