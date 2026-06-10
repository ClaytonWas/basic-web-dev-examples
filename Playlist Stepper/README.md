# Playlist Stepper

A tiny music player UI: a "now playing" card with Next and Previous buttons that step through a playlist. No audio — the lesson is the *index*. Moving through a list is just doing maths on a position number, and the edges of the list are where the bugs live.

**Concepts:** **index arithmetic** (`currentIndex + 1` / `- 1`), array **bounds** (`0` to `length - 1`), what `songs[8]` gives you when there is no song 8 (`undefined`), wrap-around logic, the off-by-one between human counting (1-based) and array counting (0-based), state in a variable across clicks
**Builds on:** [Rock Paper Scissors](../Rock%20Paper%20Scissors/) — RPS picked array items *randomly*; this lesson moves through them *deliberately*, which is where bounds suddenly matter.

## Files

- `index.html` — the page markup (the player card and two buttons)
- `index.css` — styling
- `playlist.js` — the playlist data and the stepping logic

## Usage

1. Open `index.html` in a browser.
2. The first song shows, with its position ("Song 1 of 8").
3. Click **Next** and **Previous** to step through. Stepping past either end wraps around, like a real music player.

## How It Works

- `songs` is an array of `{ title, artist }` objects. With 8 songs, the valid positions are **0 to 7** — the last index is always `songs.length - 1`.
- `currentIndex` is the player's entire memory: one number saying where we are.
- `showSong()` displays `songs[currentIndex]`. The position line shows `currentIndex + 1` because humans count from 1 — a deliberate, visible off-by-one.
- `nextSong()` does `currentIndex + 1`, then a bounds check: past the end → wrap to 0. `previousSong()` mirrors it: below 0 → wrap to `songs.length - 1`.

## How to Teach It

The `undefined` moment is the lesson — let the student hit the fence before you build it.

1. **Page shell.** Create `index.html` with the card paragraphs and two buttons. Open it — empty card, dead buttons.

2. **The data and one song.** Create the `songs` array. Ask: "8 songs — what's the index of the first? The last?" (0 and 7 — write `songs.length - 1` on the board.) Write `showSong()` and call it on load. Reload — song 1 shows.

3. **Naive Next (the trap).** Write `nextSong()` with *just* `currentIndex = currentIndex + 1; showSong();`. Wire the button. Click through the playlist... and keep clicking. At song 8, the card shows `undefined`. Don't fix it yet — ask *why*. Open the console, type `songs[8]`. There's the answer: you asked for a shelf that isn't there.

4. **Build the fence.** Add the `if (currentIndex > songs.length - 1)` wrap. Discuss the choice: wrap around vs stop at the end (real players do both — it's a design decision, not a law).

5. **Previous, by the student.** Have them write `previousSong()` themselves — it's the same shape with the danger at the other end (`-1`). If they handle the wrap to `songs.length - 1` unprompted, indexing has landed.

6. **The off-by-one on display.** Point at `"Song " + (currentIndex + 1) + " of " + songs.length` — arrays count from 0, humans from 1, and the translation between them is where off-by-one bugs come from for the rest of their career.

## Challenges

- Add more songs — nothing else should need to change (that's why `songs.length` beats hard-coding 8).
- Add a **Shuffle** button (`Math.floor(Math.random() * songs.length)`).
- Add a **Restart** button (index straight to 0).
- Change wrap-around to hard stops at both ends.
- Show "Up next: ..." — and decide what it should say on the last song.
