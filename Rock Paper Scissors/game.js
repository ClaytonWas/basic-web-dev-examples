// ============================================================
// game.js — The behaviour for Rock Paper Scissors
//
// JavaScript makes the page DO things.
// When you click a move, the computer picks one at random, we work
// out who won, and we update the score. It is linked at the bottom
// of index.html using:
//     <script src="game.js"></script>
// ============================================================


// These two variables REMEMBER the score between clicks.
// We use "let" (not "const") because their values will change.
let playerScore = 0;
let computerScore = 0;

// The three possible moves, kept in an array (a list).
const moves = ["rock", "paper", "scissors"];

// Find the elements we'll update on the page.
const resultLine = document.getElementById("result");
const scoreboard = document.getElementById("scoreboard");


// Work out who wins. Returns "tie", "player", or "computer".
function decideWinner(player, computer) {
    // Same move = nobody wins.
    if (player === computer) {
        return "tie";
    }

    // The player wins in exactly these three cases.
    // "&&" means AND (both must be true); "||" means OR (either can be true).
    if (
        (player === "rock"     && computer === "scissors") ||
        (player === "paper"    && computer === "rock")     ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    }

    // If it wasn't a tie and the player didn't win, the computer won.
    return "computer";
}


// This runs one round of the game for the move the player picked.
function playRound(playerMove) {
    // Computer picks a random move from the list.
    // Math.floor(Math.random() * 3) gives a whole number: 0, 1, or 2.
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    // Decide the outcome.
    const winner = decideWinner(playerMove, computerMove);

    // Update the score and the message based on who won.
    if (winner === "tie") {
        resultLine.textContent = "It's a tie! You both picked " + playerMove + ".";
    } else if (winner === "player") {
        playerScore = playerScore + 1;
        resultLine.textContent = "You win! " + playerMove + " beats " + computerMove + ".";
    } else {
        computerScore = computerScore + 1;
        resultLine.textContent = "Computer wins! " + computerMove + " beats " + playerMove + ".";
    }

    // Show the new score.
    scoreboard.textContent = "You: " + playerScore + "  |  Computer: " + computerScore;
}


// Connect each button to a round of the game, telling playRound which move it is.
document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});
document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});


// ============================================================
// Challenge ideas to try:
// - Show the computer's move with an emoji (🪨 📄 ✂️).
// - Add a "Reset score" button that sets both scores back to 0.
// - Declare a champion after someone reaches 5 points.
// - Add a fourth move (Lizard, Spock?) and update decideWinner.
// ============================================================
