/* ============================================
   FINAL PAGE LOGIC
   ============================================ */

// --- guard: must have come through the full flow ---
if (sessionStorage.getItem('valentineUnlocked') !== 'true') {
  window.location.href = '../login/index.html';
} else if (sessionStorage.getItem('valentinePuzzleSolved') !== 'true') {
  window.location.href = '../puzzle/index.html';
}

// a few extra hearts burst in for a celebratory feel
window.addEventListener('DOMContentLoaded', () => {
  initFloatingHearts(28);
});
