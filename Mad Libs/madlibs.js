// ============================================================
// madlibs.js — The behaviour for the Mad Libs page
//
// JavaScript makes the page DO things.
// When the button is clicked, this file reads every input box and
// stitches the words together into one silly story.
// It is linked at the bottom of index.html using:
//     <script src="madlibs.js"></script>
// ============================================================


// Find the button and the paragraph where the story will appear.
const makeStoryButton = document.getElementById("makeStory");
const storyParagraph = document.getElementById("story");

// This function builds and shows the story.
function makeStory() {
    // Read what the user typed in each box. .value is the text inside an input.
    const adjective = document.getElementById("adjective").value;
    const animal = document.getElementById("animal").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    const number = document.getElementById("number").value;

    // Gentle check: if any box is empty, ask the user to fill them in and stop.
    // .trim() removes spaces so " " doesn't count as filled in.
    if (adjective.trim() === "" || animal.trim() === "" || verb.trim() === "" ||
        place.trim() === "" || number.trim() === "") {
        storyParagraph.textContent = "Please fill in every box first!";
        return; // leave the function now — don't build a half-empty story
    }

    // Build the story. The backticks ` ` make a "template literal" — a string
    // where ${ ... } drops a value right into the sentence.
    const story = `One day, a ${adjective} ${animal} ${verb} all the way to ${place}. ` +
                  `It was so much fun that ${number} friends joined in too!`;

    // Show the finished story on the page.
    storyParagraph.textContent = story;
}

// Run makeStory() whenever the button is clicked.
makeStoryButton.addEventListener("click", makeStory);


// ============================================================
// Challenge ideas to try:
// - Add more input boxes (a colour, a food) and use them in the story.
// - Write a longer, sillier story with more blanks.
// - Add a "Surprise me!" button that fills the boxes with random words.
// - Clear the boxes after the story is made.
// ============================================================
