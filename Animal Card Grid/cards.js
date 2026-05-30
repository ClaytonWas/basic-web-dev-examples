// ============================================================
// cards.js — The behaviour for the Animal Card Grid
//
// JavaScript makes the page DO things.
// The big idea: we keep a LIST of animals, then use a LOOP to build
// one card on the page for each animal — without copying HTML by hand.
// It is linked at the bottom of index.html using:
//     <script src="cards.js"></script>
// ============================================================


// An ARRAY (a numbered list). Each item is an OBJECT — a bundle of
// related facts wrapped in { }. Every animal has the same three labels.
const animals = [
    { emoji: "🦁", name: "Lion",     fact: "Lions are the only cats that live in big family groups called prides." },
    { emoji: "🐧", name: "Penguin",  fact: "Penguins can't fly, but they're brilliant swimmers." },
    { emoji: "🐘", name: "Elephant", fact: "An elephant's trunk has over 40,000 muscles." },
    { emoji: "🦒", name: "Giraffe",  fact: "A giraffe's tongue can be 20 inches long." },
    { emoji: "🐢", name: "Turtle",   fact: "Some turtles can live for more than 100 years." },
    { emoji: "🦊", name: "Fox",      fact: "Foxes use the Earth's magnetic field to help them hunt." }
];

// Find the empty container in the HTML where the cards will go.
const cardGrid = document.getElementById("cardGrid");

// A LOOP runs the same code once for every item in the list.
// forEach hands us one "animal" at a time so we can build its card.
animals.forEach(function(animal) {
    // 1. Make a new <div> to be this animal's card.
    const card = document.createElement("div");
    card.className = "card"; // links it to the .card rule in index.css

    // 2. Fill the card with HTML. The backticks ` ` make a "template
    //    literal" — a string where ${ ... } drops a value right in.
    card.innerHTML = `
        <div class="emoji">${animal.emoji}</div>
        <h2>${animal.name}</h2>
        <p>${animal.fact}</p>
    `;

    // 3. Attach the finished card to the grid on the page.
    cardGrid.appendChild(card);
});


// ============================================================
// Challenge ideas to try:
// - Add more animals to the array — each new card appears automatically!
// - Add a new fact to every object (e.g. "diet") and show it on the card.
// - Swap the topic entirely: planets, foods, video games, your friends.
// - Give each card a button that reveals an extra fact when clicked.
// ============================================================
