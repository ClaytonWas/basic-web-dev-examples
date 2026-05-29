# Geological Wonders — Building a Table-Based Web Page

A hands-on lesson in the HTML `<table>` element. The example here is a table of geological wonders, but the **topic is up to you** — sports teams, video games, recipes, planets, your favourite albums. Anything that fits into rows and columns works. What matters is that you learn how a table is structured and styled.

**Concepts:** HTML `<table>` / `<tr>` / `<th>` / `<td>`, linking a CSS stylesheet, CSS selectors (element, grouped, class, descendant, positional), pseudo-classes (`:hover`, `:nth-child`)
**Builds on:** nothing — this is the recommended **first lesson** (pure HTML and CSS, no JavaScript).

## Files

- `index.html` — the content (your table)
- `index.css` — the styling (how the table looks)
- `images/` — the photos used in the table

## Usage

1. Open `index.html` in a browser.
2. You'll see a styled table of geological wonders — scroll through the rows and hover over them to see the highlight effect.

## What You'll Learn

- How a `<table>` is built from rows and cells
- The difference between header cells (`<th>`) and data cells (`<td>`)
- How to link and use a CSS stylesheet
- How CSS selectors target elements, classes, and specific columns

## The Anatomy of a Table

A table is made of **rows**, and each row is made of **cells**. Three tags do the work:

| Tag | Meaning | Notes |
|-----|---------|-------|
| `<table>` | The whole table | Wraps everything |
| `<tr>` | Table row | One row of the table |
| `<th>` | Header cell | Bold + centered by default — used for column labels |
| `<td>` | Data cell | Holds your actual content |

The key rule: **every row must have the same number of cells**, or the table breaks. If your header has 5 columns, every data row needs 5 cells too.

```html
<table>
  <tr>                  <!-- a row -->
    <th>Column A</th>   <!-- header cell -->
    <th>Column B</th>
  </tr>
  <tr>                  <!-- another row -->
    <td>some data</td>  <!-- data cell -->
    <td>more data</td>
  </tr>
</table>
```

## How to Teach It

Pick your topic first, then build the structure before the content, and style last. Each step is viewable in the browser.

1. **Set up the page shell.** Create `index.html` with `<!DOCTYPE html>`, the `<html>`, `<head>`, and `<body>` tags. In the `<head>`, add a `<title>` and the stylesheet link (`<link rel="stylesheet" href="index.css">`). Open it — a blank page with your title on the tab.

2. **Decide your columns.** What facts describe each item in your topic? For geological wonders it's *Wonder, Location, Created By, Description, Similar Wonders*. For video games it might be *Title, Studio, Genre, Year, Similar Games*. Write these down — they become your header row.

3. **Build the header row.** Inside `<body>`, add a `<table>` with one `<tr>` of `<th>` cells, one per column from step 2. Open it — you'll see your bold column labels with no data yet.

```html
   <table>
     <tr>
       <th>Title</th>
       <th>Studio</th>
       <th>Year</th>
     </tr>
   </table>
```

4. **Add one data row.** Below the header, add a `<tr>` with the same number of `<td>` cells, filled with one real entry from your topic. Check that it lines up under the headers. This is your template — every other row copies its shape.

5. **Fill in the rest.** Duplicate that row for each entry. Keep the cell count identical every time. Now you have a complete, if plain, table.

6. **Style it with CSS.** Create `index.css`. Build up the look one rule at a time so you see each change:
   - `body { background: ...; }` — set a page colour.
   - `table { border-collapse: collapse; width: 90%; margin: 2rem auto; }` — collapse double borders and center the table.
   - `th, td { border: 1px solid #ccc; padding: 0.75rem; }` — borders and breathing room on every cell (a **grouped selector** hits both).
   - `th { background: #eee; }` — tint the header so it stands out.
   - `tr:nth-child(even) { background-color: #f9f9f9; }` — "zebra striping" for readability.
   - `tr:hover { background-color: #eaeaea; }` — highlight the row under the mouse.

## Selectors Worth Knowing

The CSS file shows several ways to target what you want to style:

- **Element selector** — `table`, `td` — targets every element of that type.
- **Grouped selector** — `th, td` — applies one rule to several elements at once.
- **Class selector** — `.wonder-title` — targets only elements with `class="wonder-title"`, so you can style specific cells without affecting all `<td>`s.
- **Descendant selector** — `.wonder-title b` — targets a `<b>` *inside* a `.wonder-title` cell.
- **Pseudo-class** — `:nth-child(even)`, `:hover` — matches elements by position or state.
- **Positional selector** — `td:nth-child(4)` — targets the 4th column in every row (handy for making one column narrower).

## Challenges

- Add a `<caption>` right after `<table>` to give it a visible title.
- Wrap your header in `<thead>` and your data rows in `<tbody>` for cleaner structure.
- Add an extra column and fill it in across every row (remember: same cell count per row).
- If your topic has images, add an `<img>` inside a cell and style it in CSS with `max-width`.
- Make `:hover` skip the header row — try `tbody tr:hover` instead of `tr:hover`.
- Proofread your content. HTML won't catch a typo like "Erruptions" for you.