/* ============================================
   PUZZLE PAGE LOGIC
   3x3 sliding tile puzzle
   ============================================ */

// --- guard: must have unlocked the login page first ---
if (sessionStorage.getItem('valentineUnlocked') !== 'true') {
  window.location.href = '../login/index.html';
}

const SIZE = 3;                 // 3x3 grid
const BOARD_W = 270;
const BOARD_H = 380;
const TILE_W = BOARD_W / SIZE;
const TILE_H = BOARD_H / SIZE;

const board = document.getElementById('puzzleBoard');
const solvedPanel = document.getElementById('solvedPanel');
const shuffleBtn = document.getElementById('shuffleBtn');
const solveBtn = document.getElementById('solveBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const songAudio = document.getElementById('songAudio');

let tiles = []; // array of tile values 0..8, 0 = empty space

function buildSolvedState() {
  tiles = Array.from({ length: SIZE * SIZE }, (_, i) => i);
}

function render() {
  board.innerHTML = '';
  tiles.forEach((value, index) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.index = index;

    if (value === 0) {
      tile.classList.add('empty');
    } else {
      const row = Math.floor(value / SIZE);
      const col = value % SIZE;
      tile.style.backgroundPosition = `-${col * TILE_W}px -${row * TILE_H}px`;
      tile.addEventListener('click', () => attemptMove(index));
    }
    board.appendChild(tile);
  });
}

function attemptMove(index) {
  const emptyIndex = tiles.indexOf(0);
  const validMoves = getAdjacentIndices(emptyIndex);

  if (validMoves.includes(index)) {
    [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
    render();
    checkSolved();
  }
}

function getAdjacentIndices(index) {
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  const adj = [];

  if (row > 0) adj.push(index - SIZE);
  if (row < SIZE - 1) adj.push(index + SIZE);
  if (col > 0) adj.push(index - 1);
  if (col < SIZE - 1) adj.push(index + 1);

  return adj;
}

function shuffle() {
  buildSolvedState();
  // perform many random valid moves so the puzzle is always solvable
  let emptyIndex = tiles.indexOf(0);
  for (let i = 0; i < 200; i++) {
    const options = getAdjacentIndices(emptyIndex);
    const target = options[Math.floor(Math.random() * options.length)];
    [tiles[emptyIndex], tiles[target]] = [tiles[target], tiles[emptyIndex]];
    emptyIndex = target;
  }
  solvedPanel.classList.remove('show');
  render();
}

function checkSolved() {
  const isSolved = tiles.every((value, index) => value === index);
  if (isSolved) {
    onPuzzleSolved();
  }
}

function onPuzzleSolved() {
  solvedPanel.classList.add('show');

  // try to autoplay the song; browsers may block autoplay until user
  // interacts with the page again, so we also retry on next interaction
  songAudio.play().catch(() => {
    document.addEventListener('click', () => songAudio.play(), { once: true });
  });
}

shuffleBtn.addEventListener('click', shuffle);

solveBtn.addEventListener('click', () => {
  buildSolvedState();
  render();
  checkSolved();
});

nextPageBtn.addEventListener('click', () => {
  sessionStorage.setItem('valentinePuzzleSolved', 'true');
  window.location.href = '../poem/index.html';
});

// init
shuffle();
function goToFinal() {
    window.location.href = "../final/index.html";
}