// ============================================================
// bugs.js — FOUR features, FOUR bugs. Happy hunting!
//
// Each section below has exactly ONE bug. Everything else is
// correct — including all the comments, which describe what the
// code is SUPPOSED to do. When a comment and the code disagree,
// you've found your bug.
//
// Detective tools:
//   1. RUN IT — click the buttons and watch what actually happens.
//   2. READ IT — trace the code line by line with a pencil.
//   3. PROBE IT — add console.log() lines to peek at values,
//      and open the Console with F12 to see them.
// ============================================================


// ════════════════════════════════════════════
// HUNT 1: THE PASSWORD GATE
// Only "acorn" should unlock the door.
// SYMPTOM: every single guess unlocks it.
// ════════════════════════════════════════════

document.getElementById("passwordBtn").addEventListener("click", function() {
    const guess = document.getElementById("passwordBox").value;
    const resultLine = document.getElementById("passwordResult");

    // If the guess is exactly "acorn", open the door. Otherwise, refuse.
    if (guess = "acorn") {
        resultLine.textContent = "🔓 The door swings open!";
    } else {
        resultLine.textContent = "🔒 Nope. The door stays shut.";
    }
});


// ════════════════════════════════════════════
// HUNT 2: THE LAUNCH COUNTDOWN
// Should print: 5, 4, 3, 2, 1, LIFTOFF!
// SYMPTOM: it never reaches liftoff. (A safety brake stops it
// after 1000 laps so the page doesn't freeze — a runaway loop
// with no brake would lock up the whole tab!)
// ════════════════════════════════════════════

document.getElementById("countdownBtn").addEventListener("click", function() {
    const resultLine = document.getElementById("countdownResult");
    let text = "";

    // Start the count at 5...
    let count = 5;
    let safety = 0; // the safety brake's lap counter (not the bug)

    // ...and keep going while the count is still above zero.
    while (count > 0) {
        text = text + count + "... ";

        // Each pass, the count should drop by one so it heads toward 0.
        count = count + 1;

        // ── SAFETY BRAKE — not the bug, leave this in! ──
        safety = safety + 1;
        if (safety > 1000) {
            resultLine.textContent =
                "🚨 Runaway loop caught after 1000 laps! Why did count never reach 0?";
            return;
        }
    }

    resultLine.textContent = text + "LIFTOFF! 🚀";
});


// ════════════════════════════════════════════
// HUNT 3: THE MEDAL CEREMONY
// Should announce the LAST finisher in the results list.
// SYMPTOM: announces "undefined" instead of a name.
// ════════════════════════════════════════════

// The race results, fastest first. Count them — there are 5.
const finishers = ["Maya", "Leo", "Sam", "Priya", "Noah"];

document.getElementById("medalBtn").addEventListener("click", function() {
    const resultLine = document.getElementById("medalResult");

    // Grab the very last finisher in the list.
    const lastPlace = finishers[5];

    resultLine.textContent =
        "And in last place... " + lastPlace + "! 👏 (Hey, they finished!)";
});


// ════════════════════════════════════════════
// HUNT 4: THE TIP CALCULATOR
// Should show the bill plus a 20% tip.
// SYMPTOM: the maths shows up in the Console (F12!) — but the
// page says "undefined". Where is the answer getting lost?
// ════════════════════════════════════════════

// This function should hand BACK the bill with a 20% tip added,
// so the click handler below can use the answer.
function addTip(bill) {
    console.log(bill * 1.2);
}

document.getElementById("tipBtn").addEventListener("click", function() {
    const resultLine = document.getElementById("tipResult");
    const bill = parseFloat(document.getElementById("billBox").value);

    if (isNaN(bill)) {
        resultLine.textContent = "Please enter a number for the bill.";
        return;
    }

    // Ask addTip for the answer and show whatever comes back.
    const total = addTip(bill);
    resultLine.textContent = "Bill with tip: $" + total;
});


// ============================================================
// Stuck? Hints (one per hunt, mildest first):
// H1: Read the if line VERY slowly. Count the symbols.
// H2: Add console.log(count) inside the loop, click, press F12.
//     Which direction is count moving?
// H3: There are 5 finishers. What position number is the LAST one?
//     Try console.log(finishers[0]) ... and work up.
// H4: The function calculates the tip and then... does what with it?
//     What does the handler's "total" variable actually receive?
// ============================================================
