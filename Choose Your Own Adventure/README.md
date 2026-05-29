# Choose Your Own Adventure

A small browser game where the player clicks buttons to make choices that branch the story to different endings.

**Concepts:** functions with parameters, reusable helper functions, creating elements with `document.createElement`, `appendChild`, passing a function as a click handler, building a page entirely from JavaScript
**Builds on:** [Calculator](../Calculator/) — uses functions and events to *generate* the page instead of just reacting to it.

## Files

- `adventure.html` — the page markup
- `adventure.js` — the game logic

## Usage

1. Open `adventure.html` in a browser.
2. Read the prompt that appears.
3. Click a button to make your choice.
4. New text and buttons appear based on what you picked, until you reach an ending.

## How It Works

The game builds the page dynamically — there are no story elements in the HTML. Two helpers do the work:

- `createParagraph(text)` creates a `<p>`, sets its text, and appends it to the body.
- `createButton(text, onClick)` creates a `<button>`, sets its label, wires a click handler, and appends it.

Each choice is a function (`goLeft`, `petSquirrel`, etc.) that calls these helpers to add the next bit of story and the next set of buttons. `startAdventure()` runs on load to kick things off.

## How to Teach It

Build the helpers first, then grow the story one branch at a time. Each step is runnable.

1. **Markup that shows.** Create `adventure.html` with the heading, intro paragraph, and the `<script>` tag at the end of the body. Open it — you'll see the intro text, but nothing interactive yet.

2. **The paragraph helper.** Add `adventure.js` and write `createParagraph(text)`:

```javascript
   function createParagraph(text) {
       var newParagraph = document.createElement("p"); // make a <p>
       newParagraph.textContent = text;                // fill in its text
       document.body.appendChild(newParagraph);        // attach it to the page
   }
```

   Call it once at the bottom (`createParagraph("test");`) to confirm text appears on load.

3. **The button helper.** Add `createButton(text, onClick)`. It's the same pattern, plus a click handler:

```javascript
   function createButton(text, onClick) {
       var newButton = document.createElement("button"); // make a <button>
       newButton.textContent = text;                     // label it
       newButton.addEventListener("click", onClick);     // run onClick when clicked
       document.body.appendChild(newButton);             // attach it
   }
```

   Test with `createButton("Click me", function() { createParagraph("It works!"); });`. Clicking it should add a paragraph.

4. **The opening scene.** Replace your test calls with `startAdventure()`, which uses both helpers to set up the first choice:

```javascript
   function startAdventure() {
       createParagraph("You are in a dark forest. Do you want to go left or right?");
       createButton("Left", goLeft);
       createButton("Right", goRight);
   }
```

   The handlers `goLeft` and `goRight` don't exist yet — define them as empty stubs so the page doesn't error.

5. **Grow each branch.** Fill in one choice function at a time. Each follows the same recipe: a paragraph for the new story beat, then a button per available choice. An ending is just a function that adds a paragraph and *no* buttons:

```javascript
   function goRight() {
       createParagraph("You fall into a pit and can't get out. Game over.");
   }
```

   Wire each new button to the next function (`goLeft` → `petSquirrel`/`ignoreSquirrel`), testing the path in the browser as you go.

6. **Start on load.** Make sure `startAdventure()` is called at the very bottom of the file so the first scene appears when the page opens.

To add your own scene later: write a function that calls `createParagraph` for the story, then a `createButton` for each choice, and point an existing button's handler at it.