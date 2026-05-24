function createParagraph(text) {
    // Create the element
    var newParagraph = document.createElement("p");

    // Set the text content
    newParagraph.textContent = text;

    // Add it to the page
    document.body.appendChild(newParagraph);
}

function createButton(text, onClick) {
    // Create the element
    var newButton = document.createElement("button");

    // Set the text content
    newButton.textContent = text;

    // Set the click handler
    newButton.addEventListener("click", onClick);

    // Add it to the page
    document.body.appendChild(newButton);
}

function startAdventure() {
    createParagraph("You are in a dark forest. Do you want to go left or right?");
    createButton("Left", goLeft);
    createButton("Right", goRight);
}

function goLeft() {
    createParagraph("You encounter a friendly squirrel. Do you want to pet it or ignore it?");
    createButton("Pet the squirrel", petSquirrel);
    createButton("Ignore the squirrel", ignoreSquirrel);
}

function goRight() {
    createParagraph("You fall into a pit and can't get out. Game over.");
}

function petSquirrel() {
    createParagraph("The squirrel is happy and gives you a magical acorn. You win!");
}

function ignoreSquirrel() {
    createParagraph("The squirrel is sad and runs away. You miss out on a magical adventure.");
}

// Start the adventure when the page loads
startAdventure();