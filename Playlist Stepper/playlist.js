// ============================================================
// playlist.js — The behaviour for the Playlist Stepper
//
// JavaScript makes the page DO things.
// The big idea: an array position (INDEX) is just a number in a
// variable — so we can do MATHS on it. Next is currentIndex + 1,
// Previous is currentIndex - 1. The danger: walking off either
// END of the array. This lesson is about staying inside the fence.
// It is linked at the bottom of index.html using:
//     <script src="playlist.js"></script>
// ============================================================


// The playlist: an ARRAY of OBJECTS, like the Animal Card Grid.
// REMEMBER THE FENCE-POSTS: there are 8 songs, but their positions
// are 0 to 7. The FIRST is songs[0]; the LAST is songs[7] — which
// is songs[songs.length - 1]. There is NO songs[8]!
const songs = [
    { title: "Time",                      artist: "Pink Floyd" },
    { title: "Roundabout",                artist: "Yes" },
    { title: "Tom Sawyer",                artist: "Rush" },
    { title: "Karn Evil 9",               artist: "Emerson, Lake & Palmer" },
    { title: "Wish You Were Here",        artist: "Pink Floyd" },
    { title: "Close to the Edge",         artist: "Yes" },
    { title: "The Spirit of Radio",       artist: "Rush" },
    { title: "Shine On You Crazy Diamond", artist: "Pink Floyd" },
];

// WHERE we are in the playlist right now. This one variable is the
// player's whole memory. It starts at 0 — the first song.
let currentIndex = 0;

// Find the elements we'll write into.
const nowPlaying = document.getElementById("nowPlaying");
const artistLine = document.getElementById("artist");
const positionLine = document.getElementById("position");


// Show whichever song currentIndex is pointing at.
function showSong() {
    const song = songs[currentIndex];

    nowPlaying.textContent = "🎵 " + song.title;
    artistLine.textContent = "by " + song.artist;

    // Humans count from 1, arrays count from 0 — so we show
    // currentIndex + 1 to the human. Classic off-by-one territory!
    positionLine.textContent =
        "Song " + (currentIndex + 1) + " of " + songs.length;
}


// ── NEXT ──
function nextSong() {
    // Moving forward is just maths on the index.
    currentIndex = currentIndex + 1;

    // THE BOUNDS CHECK. The last valid position is songs.length - 1
    // (8 songs → positions 0 to 7). Without this if, clicking Next on
    // the last song would ask for songs[8], which DOESN'T EXIST —
    // you'd get "undefined" on screen. Try it: comment out these two
    // lines, go past the end, and see. Then put them back!
    if (currentIndex > songs.length - 1) {
        currentIndex = 0; // wrap around to the start, like a real player
    }

    showSong();
}

// ── PREVIOUS ──
function previousSong() {
    currentIndex = currentIndex - 1;

    // Same danger at the OTHER end: from song 0, one step back is
    // index -1 — also doesn't exist. Wrap to the last song instead.
    if (currentIndex < 0) {
        currentIndex = songs.length - 1; // the LAST valid index
    }

    showSong();
}


// Wire the buttons up.
document.getElementById("next").addEventListener("click", nextSong);
document.getElementById("prev").addEventListener("click", previousSong);

// Show the first song as soon as the page loads.
showSong();


// ============================================================
// Challenge ideas to try:
// - Add your own songs to the array. Does everything still work?
//   (It should — nothing else mentions the number 8. That's the
//   point of writing songs.length instead of a hard-coded number.)
// - Add a "Shuffle" button that jumps to a random index.
//   (Math.floor(Math.random() * songs.length) — Zoo Webpage flashback!)
// - Add a "Restart" button that jumps straight to the first song.
// - Instead of wrapping around, make the ends STOP: at the last
//   song, Next does nothing. (Hint: check BEFORE you change the
//   index, or undo the change.)
// - Show the NEXT song's title in smaller text: "Up next: ...".
//   Careful — what should it say on the last song?
// ============================================================
