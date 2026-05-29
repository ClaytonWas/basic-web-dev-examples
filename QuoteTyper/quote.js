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
// Code for creating a random number betweeen 0 - quotes.length
//console.log(Math.floor(quotes.length*Math.random()))

//This is the variable for the pervious code
var random_number = (Math.floor(quotes.length*Math.random()))

//
console.log(quotes[0])

//Variables to reference the elements in the HTML file
var text_element = document.getElementById("quote_text")
var author_element = document.getElementById("author_text")
var book_element = document.getElementById("book_text")

// This is the quote you are supposed to type right now.
// We keep it in its own variable so the checker knows the right answer.
var active_quote = quotes[random_number].text

//Code for previous variables
text_element.innerText = active_quote
author_element.innerText = quotes[random_number].author
book_element.innerText = quotes[random_number].book

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
        // So far so good, you just are not done yet
        check_message.innerText = "Keep going, you are doing great!"
        check_message.style.color = "blue"
    } else {
        // A letter does not match the quote
        check_message.innerText = "Oops! Check your spelling and try again."
        check_message.style.color = "red"
    }
}

// Run checkTyping every time a key is typed in the box
type_box.addEventListener("input", checkTyping)