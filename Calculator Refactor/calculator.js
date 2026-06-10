// ============================================================
// calculator.js — The Calculator, REFACTORED
//
// "Refactoring" means improving how code is organised WITHOUT
// changing what it does. The calculator works exactly like before.
//
// THE BIG IDEA: in the original, one big function did everything —
// read the inputs, did the maths, AND wrote to the page. Here we
// pull the maths out into its own function, calculate(), which
// RETURNS its answer instead of showing it.
//
// Why does that matter?
//   - RETURN sends a value back to whoever called the function.
//   - SHOWING (textContent / console.log) just displays it.
// A function that RETURNS is a reusable part — you can use its
// answer in bigger expressions, like:
//     calculate(2, "+", 3) * 10
// A function that only DISPLAYS can't do that. Its answer is
// stuck on the screen, out of reach of the rest of the program.
// ============================================================


// ── THE MATHS, IN ITS OWN FUNCTION ──
// This function knows NOTHING about the page. No getElementById,
// no textContent. Numbers in → number out. That's what makes it
// reusable and easy to test.
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2; // "return" sends the answer back AND
                                // leaves the function immediately —
                                // that's why no "break" is needed here.
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
    // If the operator was none of the above, we end up here.
    // "null" is a special value meaning "no answer".
    return null;
}

// PROVE IT TO YOURSELF in the Console (F12). Because calculate()
// returns its answer, you can call it directly and even combine it:
//     calculate(2, "+", 3)                          → 5
//     calculate(2, "+", 3) * 10                     → 50
//     calculate(10, "*", calculate(1, "+", 1))      → 20  (a function call INSIDE a function call!)
// You could never do this with the original calculator, because its
// answer went straight to the page instead of coming back to you.


// ── THE BUTTON HANDLER ──
// This part talks to the page: it reads the boxes, checks the input,
// CALLS calculate(), and shows whatever comes back. Reading it now
// feels like reading a to-do list — each job is in its right place.
document.getElementById("calculate").addEventListener("click", function() {

    // Read and convert the inputs (the page-reading job).
    const num1 = parseFloat(document.getElementById("first").value);
    const num2 = parseFloat(document.getElementById("second").value);
    const operator = document.getElementById("operator").value;

    // Validate (the safety job) — same guards as the original.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return; // note: a "return" with no value just exits early.
    }
    if (operator === "/" && num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    // Do the maths (the calculating job) — one clean function call.
    // The RETURNED value lands in this variable.
    const result = calculate(num1, operator, num2);

    // calculate() returns null if the operator was unknown.
    if (result === null) {
        alert("Please select a valid operator.");
        return;
    }

    // Show the answer (the displaying job).
    document.getElementById("result").textContent =
        num1 + " " + operator + " " + num2 + " = " + result;
});


// ============================================================
// Challenge ideas to try:
// - In the console, compute (5 + 3) * (10 - 4) using ONLY calls
//   to calculate(). (Hint: three calls, nested.)
// - Add a "^" (power) case to calculate(). Notice the handler
//   doesn't need to change at all — that's the refactor paying off.
// - Write your own returning function double(n), then try
//   double(3) + double(5) in the console. Predict it first!
// - Spot the difference: change one "return num1 + num2" to
//   "console.log(num1 + num2)" and watch what the page shows.
//   (It shows "undefined" — the function displayed the answer
//   but RETURNED nothing. Change it back!)
// ============================================================
