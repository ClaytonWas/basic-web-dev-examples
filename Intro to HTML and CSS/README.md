# Intro to HTML & CSS

A first web page for brand-new beginners (great for around grade 4). It's a simple **"All About Me"** page: a title, a sentence, a list of favourite things, and a picture. No JavaScript. The one big idea is that **HTML is the stuff on the page** and **CSS makes it look nice**.

**Concepts:** the page skeleton (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`), the title, headings (`<h1>`/`<h2>`), a paragraph (`<p>`), a bullet list (`<ul>`/`<li>`), a picture (`<img>`), and connecting a stylesheet, plus a few easy CSS colours and fonts
**Builds on:** [Geological Wonders](../Geological%20Wonders/) — same HTML-and-CSS-only world, but as simple as it gets.

## Files

- `index.html` — the page: the title, sentence, list, and picture
- `index.css` — the colours and fonts
- `picture.svg` — a small picture so the `<img>` works with no internet

## Usage

1. Open `index.html` in a browser (double-click it).
2. You'll see an "All About Me" page.
3. Open `index.html` in an editor, change the name, age, and list to be about **you**, then refresh to see your page change.

## How It Works

- **HTML is the content.** In `index.html`, each tag does one job: `<h1>` is the big title, `<h2>` is a smaller heading, `<p>` is a sentence, `<ul>` is a bullet list (each `<li>` is one item), and `<img>` is a picture.
- **CSS makes it look nice.** The `<link>` line in the `<head>` connects `index.css`, which sets the background colour, the font, and the heading colours.

## How to Teach It

Write the words first, then add the colours. Each step is something kids can see right away.

1. **The big title.** Make `index.html` with `<!DOCTYPE html>`, `<html>`, `<head>` (with a `<title>`), and a `<body>` holding one `<h1>All About Me</h1>`. Open it — there's your title.
2. **Add a sentence.** Add a `<p>` that says your name and age. Refresh.
3. **Add a list.** Add an `<h2>Things I Like</h2>` and a `<ul>` with a few `<li>` items. Refresh.
4. **Add a picture.** Add an `<img src="picture.svg" alt="...">`. Refresh — now there's a picture.
5. **Add colours.** Make `index.css`, link it in the `<head>`, and set the `background-color` and `h1` colour. Refresh and watch the page change colour.

## Challenges

- Change the name, age, and list to be all about you.
- Pick your own favourite background colour.
- Add more things to the list.
- Swap in your own picture.
