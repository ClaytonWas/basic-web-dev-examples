# Rock Paper Scissors

The classic game against the computer. You pick a move, the computer picks randomly, and a running scoreboard keeps track. A fun way to learn game logic and how to remember a score across many clicks.

**Concepts:** arrays, `Math.random()` to pick from a list, comparison logic with `&&` / `||`, `if` / `else if` / `else`, tracking state in variables (the score), updating the DOM, click events
**Builds on:** [Calculator](../Calculator/) — more branching logic, plus a score that the program has to *remember* between clicks.

## Files

- `index.html` — the page markup (three buttons, a result line, a scoreboard)
- `index.css` — styling
- `game.js` — the game logic and the score

## Usage

1. Open `index.html` in a browser.
2. Click **Rock**, **Paper**, or **Scissors**.
3. The result line says who won that round, and the scoreboard updates.
4. Keep playing — the score adds up across rounds.

## How It Works

- `playerScore` and `computerScore` are declared with `let` because they **change** as you play. They live outside the function so their values are remembered between clicks.
- The three moves are stored in a `moves` array.
- When you click a button, `playRound(yourMove)` runs. The computer picks `moves[Math.floor(Math.random() * moves.length)]` — a random item from the list.
- `decideWinner(player, computer)` returns `"tie"`, `"player"`, or `"computer"` using combined conditions (`&&` = and, `||` = or).
- An `if` / `else if` / `else` updates the right score and the message, then the scoreboard text is refreshed.

## How to Teach It

Get the computer making a move first, then judge the winner, then keep score. Each step is runnable.

1. **Page shell.** Create `index.html` with three buttons (`rock`, `paper`, `scissors`), a `<p id="result">`, a `<p id="scoreboard">`, and the `<script>` tag. Open it — the buttons show but do nothing yet.

2. **A random computer move.** In `game.js`, make the `moves` array and write `playRound(playerMove)` that picks a random computer move and shows both moves in `#result`. Wire the three buttons to call `playRound` with their move. Click — you'll see your move vs a random one.

3. **Decide the winner.** Add `decideWinner(player, computer)` with the tie check and the three player-win cases. Use it in `playRound` to say who won.

4. **Keep score.** Add `playerScore` and `computerScore` at the top with `let`. Add one to the winner each round and update `#scoreboard`. Now the game has memory.

## Challenges

- Show the computer's move as an emoji (🪨 📄 ✂️).
- Add a "Reset score" button.
- Declare a champion at 5 points.
- Add a fourth move and update `decideWinner`.
