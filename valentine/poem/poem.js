/* ============================================
   POEM PAGE LOGIC
   ============================================ */

// --- guard: must have come through login + puzzle first ---
if (sessionStorage.getItem('valentineUnlocked') !== 'true') {
  window.location.href = '../login/index.html';
} else if (sessionStorage.getItem('valentinePuzzleSolved') !== 'true') {
  window.location.href = '../puzzle/index.html';
}

const tamilBtn = document.getElementById('showTamil');
const englishBtn = document.getElementById('showEnglish');
const tamilPoem = document.getElementById('tamilPoem');
const englishPoem = document.getElementById('englishPoem');
const nextPageBtn = document.getElementById('nextPageBtn');

function showTamil() {
  tamilPoem.classList.add('show');
  englishPoem.classList.remove('show');
  tamilBtn.classList.add('active');
  englishBtn.classList.remove('active');
}

function showEnglish() {
  englishPoem.classList.add('show');
  tamilPoem.classList.remove('show');
  englishBtn.classList.add('active');
  tamilBtn.classList.remove('active');
}

tamilBtn.addEventListener('click', showTamil);
englishBtn.addEventListener('click', showEnglish);

nextPageBtn.addEventListener('click', () => {
  window.location.href = '../final/index.html';
});

// default view
showTamil();
function goToPuzzle() {
    window.location.href = "../puzzle/index.html";
}