/* ============================================
   SHARED JS — floating hearts decoration
   Call initFloatingHearts() on any page that has
   a <div class="floating-hearts" id="floatingHearts"></div>
   ============================================ */

function initFloatingHearts(count = 18) {
  const container = document.getElementById('floatingHearts');
  if (!container) return;

  const symbols = ['❤', '💖', '💗', '💕'];

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.fontSize = (1 + Math.random() * 1.6) + 'rem';
    span.style.animationDuration = (8 + Math.random() * 10) + 's';
    span.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(span);
  }
}

document.addEventListener('DOMContentLoaded', () => initFloatingHearts());
