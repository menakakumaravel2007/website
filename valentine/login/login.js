/* ============================================
   LOGIN PAGE LOGIC
   ============================================ */

const SECRET_CODE = "GuruMenaka22";

const form = document.getElementById('loginForm');
const input = document.getElementById('secretCode');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const entered = input.value.trim();

  if (entered === SECRET_CODE) {
    // remember that the user is "logged in" for this session
    sessionStorage.setItem('valentineUnlocked', 'true');
    window.location.href = '../puzzle/index.html';
  } else {
    errorMsg.style.display = 'block';
    input.value = '';
    input.focus();
    form.classList.add('shake');
    setTimeout(() => form.classList.remove('shake'), 400);
  }
});
function goToPoem() {
    window.location.href = "../poem/index.html";
}