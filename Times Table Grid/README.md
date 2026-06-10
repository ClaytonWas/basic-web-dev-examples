# Times Table Grid

A multiplication table built entirely by JavaScript — the outer loop builds each row, the inner loop builds each cell. About 100 cells from 20 lines of code, with the perfect squares highlighted.

**Concepts:** the classic counting `for` loop (`let i = 1; i <= n; i++`), **nested loops** (a loop inside a loop), an `if` inside a loop, `createElement` / `appendChild`, building on the `<table>` HTML from Geological Wonders
**Builds on:** [Animal Card Grid](../Animal%20Card%20Grid/) — that lesson looped over a *list* with `forEach`; this one introduces the counting loop you control yourself, and then puts one inside another.

## Files

- `index.html` — the page markup (just one empty container)
- `index.css` — styling, including the `.square` highlight
- `table.js` — the nested loops that build the table

## Usage

1. Open `index.html` in a browser.
2. You'll see a full 10x10 multiplication table with header rows and highlighted perfect squares.
3. Change `SIZE` in `table.js` to 12 and reload — the table grows with zero extra code.

## How It Works

- A classic `for` loop has three parts: a START (`let col = 1`), a KEEP-GOING condition (`col <= SIZE`), and an EACH-TIME step (`col++`).
- The **outer** loop runs once per row. Inside it, the **inner** loop runs once per cell. Like a clock: the outer loop is the hour hand, the inner loop is the minute hand — for one tick of the outer loop, the inner loop runs through all of its values.
- Each cell's value is simply `row * col`.
- An `if (row === col)` inside the inner loop tags the perfect squares with `class="square"`, which the CSS highlights.

## How to Teach It

Build one loop before two. Each step is runnable.

1. **Page shell.** Create `index.html` with a heading and one empty `<div id="tableArea">`, plus the `<script>` tag at the end. Open it — just the heading shows.

2. **One row with one loop.** In `table.js`, create the `<table>`, then write a single `for` loop that makes 10 `<td>` cells containing just the loop counter, all in one `<tr>`. Walk through the three parts of the loop header out loud. Reload — one row of 1 to 10.

3. **Predict, then nest.** Ask: "what if we ran that whole loop once per row?" Have the student predict the build order for a 3x3 grid (row 1: cols 1,2,3; row 2: cols 1,2,3...). Then wrap the row-building code in the outer loop and change the cell contents to `row * col`. Reload — the full grid. Add `console.log(row, col)` in the inner loop and check their prediction in the console (F12).

4. **An if inside the loop.** Add the `if (row === col)` highlight. This shows that loops can make decisions on every pass.

5. **Headers and style.** Add the header row and row headers, then style with `index.css` — `border-collapse` is a callback to Geological Wonders.

The key understanding to check before moving on: **the inner loop finishes completely before the outer loop ticks once.** If the student can write out the (row, col) order for a 3x2 grid on paper, nested loops have landed.

## Challenges

- Change `SIZE` to 12 or 15.
- Highlight the whole 7 times table row in a different colour.
- Highlight every even answer (`% 2 === 0`).
- Add an input box and button so the user picks the size.
- Hard mode: make the top-left triangle (where col > row) blank, so each fact appears only once.
