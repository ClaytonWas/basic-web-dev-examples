// ============================================================
// zoo-interactive.js — The behaviour for the Zoo page
//
// JavaScript makes the page DO things.
// In this lesson we build TWO interactive buttons:
//   1. A button that shows a RANDOM animal fact
//   2. A button that switches the page between DAY and NIGHT
// It is linked at the bottom of index.html using:
//     <script src="zoo-interactive.js"></script>
// ============================================================


// ============================================
// PART 1: A RANDOM ANIMAL FACT
// ============================================

// An ARRAY is a list of things. Here is a list of fun facts.
// Each fact has a position number, starting at 0.
const randomFacts = [
    "Ring-tailed lemurs can jump up to 10 feet in the air!",
    "Orangutans share 97% of their DNA with humans!",
    "Green snakes are excellent swimmers despite living on land!",
    "Giraffes only sleep about 30 minutes per day!",
    "Elephants have over 40,000 muscles in their trunks alone!",
    "No two tigers have the same stripe pattern - they're like fingerprints!",
    "Dolphins each have a name - a special whistle that is only theirs!"
];

// A FUNCTION is a block of code we can run whenever we want.
// This one picks a random fact and shows it on the page.
function showRandomFact() {
    // Math.random() gives a number between 0 and 1.
    // We multiply by how many facts there are, then round DOWN
    // with Math.floor() to get a whole number like 0, 1, 2, 3...
    const randomIndex = Math.floor(Math.random() * randomFacts.length);

    // Pick the fact at that random position in the list
    const fact = randomFacts[randomIndex];

    // Find the paragraph in the HTML and put the fact inside it
    const factDisplay = document.getElementById("randomFactDisplay");
    factDisplay.textContent = fact;
}

// Find the button in the HTML
const randomFactBtn = document.getElementById("randomFactBtn");

// EVENT LISTENER: when the button is clicked, run showRandomFact
randomFactBtn.addEventListener("click", showRandomFact);


// ============================================
// PART 2: DAY / NIGHT MODE
// ============================================

// This function switches the whole page between day and night.
function toggleTheme() {
    // The <body> is the whole page
    const body = document.body;

    // classList.toggle adds the "night-mode" class if it is missing,
    // and removes it if it is already there. The CSS does the colors.
    body.classList.toggle("night-mode");

    // Change the button text so it makes sense.
    const themeBtn = document.getElementById("themeBtn");
    if (body.classList.contains("night-mode")) {
        themeBtn.textContent = "☀️ Day Mode";
    } else {
        themeBtn.textContent = "🌙 Night Mode";
    }
}

// Find the button and run toggleTheme when it is clicked
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", toggleTheme);


// ============================================
// CONCEPTS LEARNED:
// ============================================
// 1. Arrays - lists of data
// 2. Functions - reusable blocks of code
// 3. Math.random() and Math.floor() - random numbers
// 4. Event Listeners - responding to clicks
// 5. DOM - changing the HTML with JavaScript
// 6. if / else - making decisions
// ============================================
