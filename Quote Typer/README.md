# Quote Typing Practice

A small browser app that shows a random literary quote and lets you practice typing it. As you type, it gives live feedback — green when you nail it, blue while you're on track, red when something doesn't match. A button swaps in a new random quote.

**Concepts:** arrays of objects, `Math.random()` / `Math.floor()`, `getElementById`, event listeners (`click` and `input`), string comparison and `startsWith`, updating text and colour in the DOM
**Builds on:** [Zoo Webpage](../Zoo%20Webpage/) — adds a second kind of event (`input`) and live, character-by-character checking.

## Files

- `index.html` — the page markup
- `index.css` — styling (linked but not shown here)
- `quote.js` — the quote data and all the logic

## Usage

1. Open `index.html` in a browser.
2. A random quote, its author, and its book appear at the top.
3. Type the quote into the input box. The message line updates as you go:
   - **Blue** — what you've typed so far matches; keep going.
   - **Green** — you typed the whole quote correctly.
   - **Red** — a character doesn't match; check your spelling.
4. Click **"Click me to refresh the quotes!"** for a new random quote and a cleared box.

## How It Works

- The quotes live in a `quotes` array — each entry is an object with `text`, `author`, and `book`.
- A random index picks one quote on load. Its text is stored in `active_quote` so the checker always knows the correct answer.
- `refreshquotes()` picks a new random quote, updates the displayed text, and clears the input and message.
- `checkTyping()` runs on every keystroke (the `input` event). It compares the box's value against `active_quote`:
  - exact match → success message,
  - `active_quote.startsWith(typed)` → still on track,
  - otherwise → mismatch.

## How to Teach It

Get a quote showing first, then layer on the button and the live checker. Each step is runnable.

1. **Page shell.** Create `index.html` with the three display paragraphs (`quote_text`, `author_text`, `book_text`), the refresh button, the typing label, the `type_box` input, the `check_message` paragraph, and the `<script>` tag at the end. Open it — empty paragraphs, but the structure is there.

2. **The data.** Create `quote.js` and define the `quotes` array of `{ text, author, book }` objects. Pick any quotes you like — books, movies, song lyrics, anything — as long as each has those three fields. Leave `book` as `""` if there isn't one.

3. **Show one quote.** Grab the three display elements with `getElementById`, pick a random index with `Math.floor(quotes.length * Math.random())`, store its text in `active_quote`, and write the text, author, and book into the paragraphs. Reload — a random quote appears.

4. **Wire the refresh button.** Write `refreshquotes()` to repeat step 3's logic with a fresh random index, then attach it to the button with `addEventListener("click", ...)`. Clicking should swap the quote.

5. **Add the typing checker.** Grab `type_box` and `check_message`. Write `checkTyping()` to compare the box's value against `active_quote` and set the message and colour for the three cases (exact match, prefix match, mismatch). Attach it with `type_box.addEventListener("input", checkTyping)`. Now feedback updates as you type.

6. **Clear on refresh.** Make sure `refreshquotes()` also empties `type_box.value` and `check_message.innerText` so each new quote starts clean.

## Notes / Possible Cleanup

A few leftovers in `quote.js` you may want to tidy:

- The `console.log(quotes[0])` and the commented-out `console.log(...)` lines are debugging scraps — safe to delete.
- `type_box` and `check_message` are used inside `refreshquotes()` but only declared lower down in the file. It works because `var` declarations are hoisted, but it reads cleaner to declare those two variables *before* the function that uses them.
- Typos in the comments: "betweeen" → "between", "pervious"/"previous".
- The trailing comma after the last quote object is harmless but can be removed.