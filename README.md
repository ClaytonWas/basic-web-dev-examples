# Basic Web Dev Examples

A set of small, finished web pages for teaching kids the basics of **HTML, CSS, and JavaScript**. Each example is self-contained and heavily commented, and every folder has its own `README.md` with a description, the concepts it covers, and step-by-step teaching notes.

**To run any example:** open its HTML file in a web browser (double-click it). No installs, no build step, no internet required.

## Suggested Teaching Order

The examples build on each other — earlier ones introduce ideas the later ones rely on. This is a good order to teach them in:

| # | Example | What it adds | Concepts |
|---|---------|--------------|----------|
| 1 | [Geological Wonders](./Geological%20Wonders/) | First page — pure HTML & CSS, no JavaScript | tables, CSS selectors, styling |
| 2 | [Zoo Webpage](./Zoo%20Webpage/) | First taste of JavaScript: two simple buttons | arrays, functions, events, `Math.random`, DOM |
| 3 | [QuoteTyper](./QuoteTyper/) | Live feedback as the user types | `input` events, string comparison, conditionals |
| 4 | [Calculator](./Calculator/) | Reading inputs, branching, validation | `switch`, `parseFloat`, `isNaN`, edge cases |
| 5 | [Choose Your Own Adventure](./Choose%20Your%20Own%20Adventure/) | Building a whole page from code | `createElement`, helper functions, branching logic |

## The Examples

- **[Geological Wonders](./Geological%20Wonders/)** — A styled table of famous natural landmarks. Pure HTML and CSS, heavily commented to explain every tag. The recommended first lesson — no JavaScript yet. The topic is swappable: make it sports teams, video games, planets, anything that fits in rows and columns.

- **[Zoo Webpage](./Zoo%20Webpage/)** — A zoo info page with a section per animal, plus two beginner-friendly JavaScript buttons: one shows a random animal fact, the other toggles day/night mode. The gentlest possible intro to JavaScript.

- **[QuoteTyper](./QuoteTyper/)** — Shows a random book quote and lets you practice typing it, with live colour feedback (green = correct, blue = on track, red = mismatch) and a button to swap in a new quote.

- **[Calculator](./Calculator/)** — A web calculator that does basic arithmetic on two numbers. Introduces reading form inputs, a `switch` statement, and input validation (non-numbers, divide-by-zero).

- **[Choose Your Own Adventure](./Choose%20Your%20Own%20Adventure/)** — A branching story game where clicking buttons moves you through the story to different endings. The whole page is built from JavaScript using two reusable helper functions.

## How Each README Is Organized

Every example's `README.md` follows the same structure, so you always know where to look:

- **Description + Concepts** — what it is and what it teaches, at a glance.
- **Files** — what each file in the folder does.
- **Usage** — how to open and use it.
- **How It Works** — a plain-English walkthrough of the code.
- **How to Teach It** — incremental build steps, each one runnable in the browser.
- **Challenges** *(where applicable)* — extensions for students who finish early.
