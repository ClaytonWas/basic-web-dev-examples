# Animal Card Grid

A page that builds a grid of animal "cards" — each with an emoji, a name, and a fact — entirely from a list in JavaScript. Add an animal to the list and a new card appears automatically.

**Concepts:** arrays of objects, `forEach` loops, template literals (`` `${...}` ``), `createElement` / `innerHTML` / `appendChild`, CSS Flexbox layout
**Builds on:** [Zoo Webpage](../Zoo%20Webpage/) — takes the "list of facts" idea and uses a loop to turn a whole list of data into cards on the page.

## Files

- `index.html` — the page markup (just one empty container)
- `index.css` — styling, including the Flexbox grid
- `cards.js` — the animal data and the loop that builds the cards

## Usage

1. Open `index.html` in a browser.
2. You'll see a grid of cards, one per animal, each with an emoji, name, and fact.
3. The cards rearrange to fit the window — try making the window narrower and watch them wrap onto new lines.

## How It Works

- The animals live in an `animals` array. Each entry is an object with the same three labels: `emoji`, `name`, and `fact`.
- `cardGrid` is the one empty `<div>` from the HTML.
- `animals.forEach(...)` runs the same code once per animal. For each one it: creates a `<div>`, fills it using a **template literal** (the backtick string where `${animal.name}` drops the value in), and appends it to the grid.
- The CSS uses `display: flex` + `flex-wrap: wrap` so the cards sit in a row and wrap when they run out of space.

## How to Teach It

Get one card showing first, then let the loop build the rest. Each step is runnable.

1. **Page shell.** Create `index.html` with a heading and one empty `<div id="cardGrid">`, plus the `<script>` tag at the end. Open it — just the heading shows.

2. **The data.** In `cards.js`, create the `animals` array with two or three objects, each having `emoji`, `name`, and `fact`. Explain: an array is a list, and each `{ ... }` is one object bundling related facts.

3. **Build ONE card by hand.** Grab `cardGrid`, then for `animals[0]` only: `createElement("div")`, set `innerHTML` with a template literal, and `appendChild`. Reload — one card appears. This proves the recipe works.

4. **Turn it into a loop.** Replace the hand-built card with `animals.forEach(function(animal) { ... })` containing that same recipe. Reload — every animal now has a card. Add another animal to the array to show a new card appear with zero extra code.

5. **Lay it out with CSS.** Add the `.card` styling, then `#cardGrid { display: flex; flex-wrap: wrap; gap: 1rem; }` so the cards form a wrapping grid.

## Challenges

- Add more animals — each makes a new card automatically.
- Add a fourth field (like `diet`) to every object and show it on the card.
- Swap the topic: planets, foods, video games, your classmates.
- Give each card a button that reveals an extra fact on click.
