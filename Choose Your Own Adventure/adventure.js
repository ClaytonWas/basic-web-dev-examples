// ============================================================
// adventure.js — The behaviour for the adventure game
//
// JavaScript makes the page DO things.
// Here's the big idea: there is almost NOTHING in adventure.html.
// This file BUILDS the whole story on the page, one paragraph and
// button at a time, as the player makes choices.
// It is linked at the bottom of adventure.html using:
//     <script src="adventure.js"></script>
// ============================================================


// ── HELPER 1: add a paragraph of story text to the page ──
// A "helper" is a small function we write once and reuse many times.
function createParagraph(text) {
    // 1. Make a brand-new <p> element (it isn't on the page yet).
    var newParagraph = document.createElement("p");

    // 2. Put the words inside it.
    newParagraph.textContent = text;

    // 3. Attach it to the page so the player can see it.
    document.body.appendChild(newParagraph);
}


// ── HELPER 2: add a clickable button to the page ──
// Same pattern as above, but a button also needs to DO something when clicked.
function createButton(text, onClick) {
    // 1. Make a new <button> element.
    var newButton = document.createElement("button");

    // 2. Label it (the words on the button).
    newButton.textContent = text;

    // 3. Decide what happens on click. "onClick" is a function passed IN to us —
    //    so each button can run a different scene.
    newButton.addEventListener("click", onClick);

    // 4. Attach it to the page.
    document.body.appendChild(newButton);
}


// ── THE STORY ──
// Each scene is a function. It adds a paragraph (the story) and then
// one button per choice. The button points at the NEXT scene's function.

// The opening scene.
function startAdventure() {
    createParagraph("You are in a dark forest. Do you want to go left or right?");
    createButton("Left", goLeft);   // clicking "Left" runs goLeft
    createButton("Right", goRight); // clicking "Right" runs goRight
}

function goLeft() {
    createParagraph("You encounter a friendly squirrel. Do you want to pet it or ignore it?");
    createButton("Pet the squirrel", petSquirrel);
    createButton("Ignore the squirrel", ignoreSquirrel);
}

// An ENDING is just a scene with a paragraph and NO buttons —
// there's nowhere left to go.
function goRight() {
    createParagraph("You fall into a pit and can't get out. Game over.");
}

function petSquirrel() {
    createParagraph("The squirrel is happy and gives you a magical acorn. You win!");
}

function ignoreSquirrel() {
    createParagraph("The squirrel is sad and runs away. You miss out on a magical adventure.");
}


// Kick everything off when the page loads by showing the first scene.
startAdventure();


// ============================================================
// Challenge ideas to try:
// - Add a new choice: give goRight a button instead of ending the game.
// - Write a brand-new scene function and point a button at it.
// - Add more endings — remember, an ending just has no buttons.
// - Add a "Play again" button to an ending that calls startAdventure().
// ============================================================
