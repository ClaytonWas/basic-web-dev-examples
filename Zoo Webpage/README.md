# Zoo Webpage

An information page about a zoo, with a section for each animal, plus **two interactive buttons** added with JavaScript: one shows a random animal fact, the other switches the page between day and night.

**Concepts:** arrays, functions, `Math.random()` / `Math.floor()`, event listeners (`click`), DOM updates (`textContent`), `classList.toggle`, `if`/`else`
**Builds on:** [Geological Wonders](../Geological%20Wonders/) (HTML + CSS). This is a gentle first step into JavaScript.

## Files

- `index.html` — the page markup (animal sections + the two buttons)
- `index.css` — styling, including the `night-mode` colours
- `zoo-interactive.js` — the two interactive features
- `Images/` — the animal photos

## Usage

1. Open `index.html` in a browser.
2. Read about each animal: Ring-tailed Lemur, Orangutan, and Green Snake.
3. Click **🎲 Show me a random animal fact!** — a fact appears below the buttons and changes each time you click.
4. Click **🌙 Night Mode** — the whole page switches to dark colours, and the button becomes **☀️ Day Mode**. Click again to switch back.

## How It Works

- **Random fact** — the facts live in a `randomFacts` array. `showRandomFact()` picks a random position with `Math.floor(Math.random() * randomFacts.length)`, then writes that fact into the `#randomFactDisplay` paragraph. The button runs it on `click`.
- **Day / night** — `toggleTheme()` calls `body.classList.toggle("night-mode")`. The CSS rule `body.night-mode { ... }` does the actual recolouring, and an `if`/`else` swaps the button's label.

## How to Teach It

Add one button at a time. Each step is runnable in the browser.

1. **Start from the finished HTML/CSS page.** Open `index.html` — the animals show, but the buttons do nothing yet because there's no JavaScript wired up. (Make sure the `<script src="zoo-interactive.js"></script>` tag is at the end of `<body>`.)

2. **The fact list (array).** In `zoo-interactive.js`, create the `randomFacts` array of strings. Explain that an array is a numbered list, starting at position 0.

3. **Show a random fact (function + event).** Write `showRandomFact()`: pick a random index, grab the fact, and put it in `#randomFactDisplay` with `textContent`. Then connect it: `randomFactBtn.addEventListener("click", showRandomFact)`. Click the button — a different fact each time.

4. **Day / night (classList + if/else).** Write `toggleTheme()` using `body.classList.toggle("night-mode")` and an `if`/`else` to change the button text. Make sure the CSS has the `body.night-mode` rules. Connect it with `themeBtn.addEventListener("click", toggleTheme)`. Click it — the page flips.

## Challenges

- Add more facts to the `randomFacts` array.
- Add a fourth animal section (copy an existing `.animal-container`, swap the text and image).
- Add a third button that scrolls back to the top, or that changes the heading text.
- Tweak the `body.night-mode` colours in `index.css` to your own dark theme.

> **Teaching note:** the original version of this lesson also had a quiz, a search box, a rename-the-zoo feature, and saved settings — far too much for one sitting. It was trimmed to these two features on purpose. Add the others back only as later, separate lessons.
