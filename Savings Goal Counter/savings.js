// ============================================================
// savings.js — The behaviour for the Savings Goal Counter
//
// JavaScript makes the page DO things.
// The big idea: a WHILE loop. A for loop is for when you KNOW how
// many times to repeat. A while loop is for when you DON'T know —
// it just keeps going until a condition stops being true.
// Here, we don't know how many weeks saving will take. We loop
// "while saved < goal" and count the weeks as we go.
// It is linked at the bottom of index.html using:
//     <script src="savings.js"></script>
// ============================================================


// Find the elements we'll read from and write to.
const answerLine = document.getElementById("answer");
const logArea = document.getElementById("log");

document.getElementById("calculate").addEventListener("click", function() {

    // Read what the user typed. .value is always TEXT (a string),
    // so parseFloat() turns "120" into the number 120.
    const thing = document.getElementById("thing").value;
    const goal = parseFloat(document.getElementById("goal").value);
    const perWeek = parseFloat(document.getElementById("perWeek").value);

    // VALIDATION 1: are these even numbers?
    if (isNaN(goal) || isNaN(perWeek)) {
        answerLine.textContent = "Please enter numbers for the cost and the weekly amount.";
        return; // leave the function now — nothing below runs.
    }

    // VALIDATION 2: this one is IMPORTANT — it protects the loop itself.
    // If perWeek is 0 (or negative), "saved" would NEVER reach the goal,
    // the condition would NEVER become false, and the loop would run
    // FOREVER. That's called an INFINITE LOOP, and it freezes the page.
    // Rule of thumb: before writing a while loop, ask yourself,
    // "what guarantees this will eventually stop?"
    if (perWeek <= 0 || goal <= 0) {
        answerLine.textContent = "Both amounts need to be bigger than zero.";
        return;
    }

    // Clear out any breakdown from last time.
    logArea.innerHTML = "";

    // Two variables the loop will update as it runs:
    let saved = 0; // how much money we have so far (the "accumulator")
    let weeks = 0; // how many weeks have passed (the counter)

    // THE WHILE LOOP. Read it out loud: "while saved is less than the
    // goal, keep doing this." Each pass = one week of saving.
    while (saved < goal) {
        saved = saved + perWeek; // add this week's savings to the total
        weeks = weeks + 1;       // count the week

        // Show this week's progress on the page.
        const line = document.createElement("p");
        line.textContent = "Week " + weeks + ": you have $" + saved;
        logArea.appendChild(line);
    }
    // The loop ends the moment "saved < goal" stops being true.
    // Try tracing it by hand with goal = 10, perWeek = 4:
    //   week 1 → saved 4, week 2 → saved 8, week 3 → saved 12. Done. 3 weeks.

    // Show the final answer.
    const itemName = thing.trim() === "" ? "your goal" : thing;
    answerLine.textContent =
        "You'll reach " + itemName + " in " + weeks + " weeks! 🎉";
});


// ============================================================
// !! EXPERIMENT — SEE AN INFINITE LOOP SAFELY !!
// What if you forgot the line "saved = saved + perWeek"? The total
// would never grow, the condition would never become false, and the
// loop would never end. DON'T just delete that line to find out —
// the page will freeze and you'll have to close the tab.
// Instead, try this SAFE version in the Console (F12):
//
//   let saved = 0;
//   let weeks = 0;
//   let safety = 0;
//   while (saved < 100) {
//       // saved = saved + 10;   ← the "forgotten" line
//       weeks = weeks + 1;
//       safety = safety + 1;
//       if (safety > 1000) {     // the SAFETY BRAKE
//           console.log("Infinite loop caught after 1000 laps!");
//           break;               // "break" force-quits a loop
//       }
//   }
//
// Un-comment the forgotten line and run it again — now it ends
// normally. THAT line is what guarantees the loop stops.
// ============================================================


// ============================================================
// Challenge ideas to try:
// - Add "interest": every 4th week, add a $5 bonus (hint: % 4 === 0).
// - Show how much money is still missing each week.
// - What if the user saves more than needed? Show the leftover amount.
// - Rebuild this with a for loop. Why is that awkward here? (Because
//   you'd have to know the number of weeks BEFORE the loop starts —
//   which is the very thing we're trying to find out.)
// ============================================================
