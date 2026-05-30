# Mad Libs

A silly-story maker. The user fills in a few words — an adjective, an animal, a verb — and the page stitches them into a funny sentence. A great, giggle-worthy way to learn how to read inputs and build strings.

**Concepts:** reading multiple inputs (`.value`), template literals (`` `${...}` ``), string building, simple validation with `.trim()` and `if`, click events
**Builds on:** [Quote Typer](../Quote%20Typer/) — reads several input boxes at once and *builds* text instead of just comparing it.

## Files

- `index.html` — the page markup (the input boxes and the button)
- `index.css` — styling
- `madlibs.js` — reads the boxes and builds the story

## Usage

1. Open `index.html` in a browser.
2. Fill in every box (an adjective, an animal, a verb, a place, a number).
3. Click **"Make my story!"** — your silly story appears below.
4. If you leave a box empty, it reminds you to fill them all in first.

## How It Works

- `makeStory()` reads each input's `.value` (the text typed in it).
- It checks that none are empty using `.trim()` (which removes spaces) inside an `if`. If any are blank, it shows a reminder and `return`s early.
- It builds the sentence with a **template literal** — the backtick string where `${animal}` drops the user's word right into the story.
- It shows the result by setting `storyParagraph.textContent`.
- The button runs `makeStory()` on `click`.

## How to Teach It

Get one word showing first, then build the full sentence, then add the safety check. Each step is runnable.

1. **Page shell.** Create `index.html` with a few labelled `<input>` boxes (each with an `id`), a button, an empty `<p id="story">`, and the `<script>` tag. Open it — the form shows, but nothing happens yet.

2. **Read one box.** In `madlibs.js`, write `makeStory()` that reads one input's `.value` and puts it straight into `#story` with `textContent`. Wire the button with `addEventListener("click", makeStory)`. Click it — the word you typed appears.

3. **Build the sentence.** Read the rest of the boxes and combine them into a story using a template literal (`` `One day, a ${adjective} ${animal}...` ``). Reload and try it — a full silly story.

4. **Add the safety check.** Add the `if` that uses `.trim()` to spot empty boxes, shows a reminder, and `return`s early. Test it by leaving a box blank.

## Challenges

- Add more boxes (a colour, a food) and weave them into the story.
- Write a longer, sillier story with more blanks.
- Add a "Surprise me!" button that fills the boxes with random words.
- Clear the boxes after the story is made.
