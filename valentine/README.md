# Valentine Surprise Website

## How to open it
Open `index.html` in your browser (it redirects to the login page),
or open `login/index.html` directly. To avoid browser issues with audio
autoplay, it's best to "Open with Live Server" in VS Code or upload the
whole folder to a free static host (Netlify, GitHub Pages, etc.) rather
than just double-clicking the file.

## Folder structure
```
valentine/
├── index.html              (redirects to login)
├── shared.css               (colors, fonts, card styles, floating hearts — shared by all pages)
├── shared.js                 (floating hearts animation — shared by all pages)
├── assets/
│   └── bg.png                (your heart background image)
├── login/
│   ├── index.html
│   ├── login.css
│   └── login.js              (secret code = "GuruMenaka22")
├── puzzle/
│   ├── index.html
│   ├── puzzle.css
│   ├── puzzle.js
│   └── our-song.mp3          ← ADD YOUR SONG FILE HERE (see note below)
├── poem/
│   ├── index.html
│   ├── poem.css
│   └── poem.js                (Tamil poem + English translation toggle)
└── final/
    ├── index.html
    ├── final.css
    ├── final.js
    └── your-photo.jpg        ← ADD YOUR PHOTO HERE (see note below)
```

## Adding the song
The Instagram link's audio can't be embedded directly (Instagram doesn't
allow hot-linking media, and the track may be copyrighted). To use it:
1. Save the song as an MP3 (for example, screen-record the reel and
   extract the audio, or download it through a service you're
   authorized to use).
2. Name the file `our-song.mp3` and place it inside the `puzzle/` folder.
3. The page is already wired to play it automatically once the puzzle
   is solved (`<audio id="songAudio" src="our-song.mp3">` in
   `puzzle/index.html`).

If your browser blocks autoplay, the script will also start the song
on the very next click anywhere on the page.

## Adding the final photo
Place an image named `your-photo.jpg` inside the `final/` folder.
If you'd rather use a different filename, update the `src` in
`final/index.html`.

## Changing the secret code
Open `login/login.js` and edit this line:
```js
const SECRET_CODE = "GuruMenaka22";
```

## Flow / guard logic
Each page checks `sessionStorage` to make sure the visitor came through
the previous steps in order (login → puzzle → poem → final). This
resets when the browser tab/session is closed.
