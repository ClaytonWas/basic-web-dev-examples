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
    { emoji: "🦊", name: "Fox",      fact: "Foxes use the Earth's magnetic field to help them hunt." },
    { emoji: "🐬", name: "Dolphin",    fact: "Dolphins give each other names using special whistles." },
    { emoji: "🐙", name: "Octopus",    fact: "An octopus has three hearts and blue blood." },
    { emoji: "🦈", name: "Shark",      fact: "Sharks have been around longer than trees have." },
    { emoji: "🐝", name: "Bee",        fact: "Bees can recognise human faces." },
    { emoji: "🦋", name: "Butterfly",  fact: "Butterflies taste with their feet." },
    { emoji: "🐌", name: "Snail",      fact: "Some snails can sleep for up to three years." },
    { emoji: "🦉", name: "Owl",        fact: "Owls can turn their heads almost all the way around." },
    { emoji: "🐊", name: "Crocodile",  fact: "A crocodile cannot stick out its tongue." },
    { emoji: "🦘", name: "Kangaroo",   fact: "Kangaroos cannot walk backwards." },
    { emoji: "🐼", name: "Panda",      fact: "Pandas can eat bamboo for up to 12 hours a day." },
    { emoji: "🦥", name: "Sloth",      fact: "Sloths can hold their breath longer than dolphins can." },
    { emoji: "🦦", name: "Otter",      fact: "Otters hold hands while sleeping so they don't drift apart." },
    { emoji: "🐳", name: "Whale",      fact: "A blue whale's heart is about the size of a small car." },
    { emoji: "🦏", name: "Rhino",      fact: "A group of rhinos is called a 'crash'." },
    { emoji: "🦇", name: "Bat",        fact: "Bats are the only mammals that can truly fly." },
    { emoji: "🐪", name: "Camel",      fact: "A camel's hump stores fat, not water." },
    { emoji: "🦓", name: "Zebra",      fact: "Every zebra has its own unique stripe pattern." },
    { emoji: "🍕", name: "Pizza",      fact: "The world's largest pizza was over 13,000 square feet." },
    { emoji: "🍌", name: "Banana",     fact: "Bananas are berries, but strawberries are not." },
    { emoji: "🍎", name: "Apple",      fact: "Apples float because they are about a quarter air." },
    { emoji: "🍯", name: "Honey",      fact: "Honey never spoils — it can last for thousands of years." },
    { emoji: "🍫", name: "Chocolate",  fact: "The Aztecs once used chocolate beans as money." },
    { emoji: "🍓", name: "Strawberry", fact: "A strawberry has about 200 tiny seeds on its outside." },
    { emoji: "🥕", name: "Carrot",     fact: "Carrots used to be purple before they were orange." },
    { emoji: "🌶️", name: "Chilli",     fact: "The spicy feeling from a chilli isn't a taste — it's heat." },
    { emoji: "🌞", name: "Sun",        fact: "The Sun makes up about 99.8% of our whole solar system." },
    { emoji: "🌙", name: "Moon",       fact: "The Moon drifts a little farther from Earth every year." },
    { emoji: "⭐", name: "Star",       fact: "The next closest star is over 4 light-years away." },
    { emoji: "🪐", name: "Saturn",     fact: "Saturn is so light it would float in a giant bathtub." },
    { emoji: "🚀", name: "Rocket",     fact: "A rocket must reach about 25,000 mph to leave Earth." },
    { emoji: "☄️", name: "Comet",      fact: "A comet's tail always points away from the Sun." },
    { emoji: "🌋", name: "Volcano",    fact: "Earth has over 1,500 volcanoes that could still erupt." },
    { emoji: "🌈", name: "Rainbow",    fact: "No two people ever see the exact same rainbow." },
    { emoji: "❄️", name: "Snowflake",  fact: "No two snowflakes are exactly alike." },
    { emoji: "🌵", name: "Cactus",     fact: "A cactus can store enough water to last for months." },
    { emoji: "🌲", name: "Tree",       fact: "Trees can communicate with each other through underground networks." },
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
