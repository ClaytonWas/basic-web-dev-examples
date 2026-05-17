var quotes = [
    //{
        //text:"",
        //author:"",
        //book:""
    //},
    {
        text: "Sometimes you just jump and hope it's not a cliff.",
        author: "Casey McQuiston",
        book: "Red, White, and Royal Blue"
    },
    {
        text:"Love is patient, love is kind, love means slowly losing your mind.",
        author:"Lynn Painter",
        book:"Better Than the Movies"
    },
    {
        text:"With great power... comes great need to take a nap. Wake me up later.",
        author:"Rick Riordan",
        book:"Last Olympian"
    },
    {
        text:"Every good story needs a villain. But the best villains are the ones you secretly like.",
        author:"Stephanie Garber",
        book:"Legendary"
    },
    {
        text:"I solemnly swear that I am up to no good.",
        author:"J.K Rowling",
        book:"Harry Potter and the Prisoner of Askaban"
    },
    {
        text:"If yes is no and once is never, then how many sides does a triangle have?",
        author:"Jennifer Lynn Barnes",
        book:"The Inheritance Games"
    },
    {
        text:"Sometimes mortals are not aware of the threads that bind them. You could both be wrong about the first time you met, and yet the two of you have orbited each other for so long, like heavenly bodies in the sky.",
        author:"Rick Riordan and Mark Oshiro",
        book:"The Sun and the Star"
    },
    {
        text:"You do not know how fast you have been running, how hard you have been working, how truly exhausted you are, until somewhat stands behind you and says, It’s OK, you can fall down now. I’ll catch you.",
        author:"Taylor Jenkins Reid",
        book:"The Seven Husbands of Evelyn Hugo"
    },
    {
        text:"Now that I look back, I don't know why I was so stressed about it all this time. Funny how sometimes you worry a lot about something and it turns out to be nothing",
        author:" R.J. Palacio",
        book:"Wonder"
    },
    {
        text:"It was an annoying name to have. People tended to spell in Mangus, rhymes with Angus. I always corrected them: No, it's Magnus, rhymes with swagness. At which point they would stare at me blankly",
        author:"Rick Riordan",
        book:"The Sword of Summer"
    },
    {
        text:"Sometimes i think if nobody spoke to me, i'd never speak again",
        author:"Alice Oseman",
        book:"Radio Silence"
    },
    {
        text:"She's happy with who she is. Maybe it's not the heteronormative dream that she grew up wishing for, but... knowing who you are and loving yourself is so much better than that, I think",
        author:"Alice Oseman",
        book:"Loveless"
    },
    {
        text:"Never attempt to apply logic to madness, for there is none; it is the nature of madness to be illogical.",
        author:"Navessa Allen",
        book:"Scandal"
    },
    {
        text:"I didn’t want him morally grey. I wanted someone with a soul as black as night. Someone who would burn the world down for me and not lose a single minute of sleep over it",
        author:"Navessa Allen",
        book:"Lights Out"
    },
    {
        text:"The moon is a loyal companion. It never leaves. It’s always there, watching, steadfast, knowing us in our light and dark moments, changing forever just as we do. Every day it’s a different version of itself. Sometimes weak and wan, sometimes strong and full of light. The moon understands what it means to be human. Uncertain. Alone. Cratered by imperfections",
        author:"Tahereh Mafi",
        book:"Shatter Me"
    },
    {
        text:"It's not the face, but the expressions on it. It's not the voice, but what you say. It's not how you look in that body, but the thing you do with it. You are beautiful.",
        author:"Stephenie Meyer",
        book:"The Host"
    },
    {
        text:"For The Lonely, The Daydreamers, The ones who find their friends between the pages of books— YOU MATTER, and your happy ending WILL come. Sometimes the wait is just longer in real life than in fiction.",
        author:"Lynn Painter",
        book:"The Do-Over"
    },
    {
        text:"He teased relentlessly and was the funniest person I’d ever met, yet I knew for a fact that he listened to Conan Gray and Gracie Abrams on repeat all the time (I had his Spotify password).",
        author:"Lynn Painter",
        book:"Betting on You"
    },
    {
        text:"Karma was supposed to be a cat, dammit, not this.",
        author:"Lynn Painter",
        book:"Betting on You"
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

//Code for previous variables
text_element.innerText = quotes[random_number].text
author_element.innerText = quotes[random_number].author
book_element.innerText = quotes[random_number].book

function refreshquotes() {
    var random_number = (Math.floor(quotes.length*Math.random()))
    text_element.innerText = quotes[random_number].text
    author_element.innerText = quotes[random_number].author
    book_element.innerText = quotes[random_number].book
}

var button = document.getElementById("refresh")
button.addEventListener("click", refreshquotes)