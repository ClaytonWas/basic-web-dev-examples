// ============================================================
// quote.js — The data and behaviour for the Quote Typer
//
// JavaScript makes the page DO things.
// This file holds the list of quotes AND the logic that shows one,
// swaps it on a button click, and checks what you type.
// It is linked at the bottom of index.html using:
//     <script src="quote.js"></script>
// ============================================================


// An ARRAY is a numbered list (it starts at position 0).
// Each item here is an OBJECT — a bundle of related facts wrapped in { }.
// Every quote has three labelled parts: text, author, and book.
var quotes = [
    {
        text: "All the world's a stage, and all the men and women merely players.",
        author: "William Shakespeare",
        book: "As You Like It"
    },
    {
        text: "I am not afraid of storms, for I am learning how to sail my ship.",
        author: "Louisa May Alcott",
        book: "Little Women"
    },
    {
        text: "To die will be an awfully big adventure.",
        author: "J.M. Barrie",
        book: "Peter Pan"
    },
    {
        text: "For the strength of the Pack is the Wolf, and the strength of the Wolf is the Pack.",
        author: "Rudyard Kipling",
        book: "The Jungle Book"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
        book: ""
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau",
        book: ""
    },
    {
        text: "It's no use going back to yesterday, because I was a different person then.",
        author: "Lewis Carroll",
        book: "Alice's Adventures in Wonderland"
    },
    {
        text: "The world is full of obvious things which nobody by any chance ever observes.",
        author: "Arthur Conan Doyle",
        book: "The Hound of the Baskervilles"
    },

]

// Pick a random starting quote.
// Math.random() gives a decimal between 0 and 1. Multiplying by how many
// quotes there are, then rounding down with Math.floor(), gives a whole
// number we can use as a position in the array (0, 1, 2, ...).
var random_number = (Math.floor(quotes.length*Math.random()))

// console.log() prints to the browser's developer Console (press F12 to see it).
// It doesn't change the page — it's a handy way to peek at a value while building.
console.log(quotes[0])

// Find the three paragraphs in the HTML so we can write into them.
var text_element = document.getElementById("quote_text")
var author_element = document.getElementById("author_text")
var book_element = document.getElementById("book_text")

// This is the quote you are supposed to type right now.
// We keep it in its own variable so the checker knows the right answer.
var active_quote = quotes[random_number].text

// Show the first quote: write each part into its paragraph.
text_element.innerText = active_quote
author_element.innerText = quotes[random_number].author
book_element.innerText = quotes[random_number].book

// Swap in a fresh random quote (runs when the refresh button is clicked).
function refreshquotes() {
    // Pick a new random quote
    random_number = (Math.floor(quotes.length*Math.random()))

    // Remember the new quote so the checker uses the new one
    active_quote = quotes[random_number].text

    text_element.innerText = active_quote
    author_element.innerText = quotes[random_number].author
    book_element.innerText = quotes[random_number].book

    // Empty the typing box and the message so we start fresh
    type_box.value = ""
    check_message.innerText = ""
}

// Find the refresh button and run refreshquotes() whenever it's clicked.
var button = document.getElementById("refresh")
button.addEventListener("click", refreshquotes)


// ------- Typing checker -------

// Get the typing box and the message line from the HTML
var type_box = document.getElementById("type_box")
var check_message = document.getElementById("check_message")

// This function runs every time you type a letter in the box
function checkTyping() {
    // What you have typed so far
    var typed = type_box.value

    if (typed === active_quote) {
        // You typed the WHOLE quote correctly!
        check_message.innerText = "Great job! You typed it perfectly! 🎉"
        check_message.style.color = "green"
    } else if (active_quote.startsWith(typed)) {
        // So far so good — what you've typed matches the start, just not finished yet.
        check_message.innerText = "Keep going, you are doing great!"
        check_message.style.color = "blue"
    } else {
        // A letter does not match the quote
        check_message.innerText = "Oops! Check your spelling and try again."
        check_message.style.color = "red"
    }
}

// "input" fires on every keystroke, so the message updates live as you type.
type_box.addEventListener("input", checkTyping)


// ============================================================
// Challenge ideas to try:
// - Add your own quotes to the array (movies, songs, anything).
// - Show a timer or count how many quotes the user has typed correctly.
// - Ignore upper/lower case so "the" and "The" both count as correct.
// - Colour each letter green/red as you type it (a bigger challenge!).
// ============================================================
