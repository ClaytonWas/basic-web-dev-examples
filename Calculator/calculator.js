// ============================================================
// calculator.js — The behaviour for the calculator page
//
// JavaScript makes the page DO things.
// This file runs when the user clicks the "=" button: it reads
// the two numbers, does the maths, and shows the answer.
// It is linked at the bottom of calculator.html using:
//     <script src="calculator.js"></script>
// ============================================================


// This function is the recipe for one calculation.
// Giving it a name (calculate) means we can refer to it later when we
// decide WHEN to run it. On its own, it just sits here waiting to be used.
function calculate() {

    // Read what the user typed. .value is always TEXT (a string),
    // so parseFloat() turns text like "12.5" into a real number we can do maths with.
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);

    // Read which operator (+, -, *, /) is chosen in the dropdown.
    var operator = document.getElementById("operator").value;

    // We'll store the answer in here once we've worked it out.
    var result;

    // VALIDATION: isNaN means "is Not a Number".
    // If either box was empty or had letters in it, stop early and warn the user.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return; // "return" leaves the function now — nothing below runs.
    }

    // A "switch" picks ONE block to run based on the operator's value.
    // It's a tidy alternative to a long chain of if / else if.
    switch (operator) {
        case "+":
            result = num1 + num2;
            break; // "break" stops the switch so it doesn't fall into the next case.
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            // Special case: dividing by zero isn't allowed in maths.
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            // "default" runs if the operator was none of the above.
            alert("Please select a valid operator.");
            return;
    }

    // Show the answer by putting it inside the <p id="result"> element.
    document.getElementById("result").textContent = result;
}


// Now we connect the function to the button.
// document.getElementById("calculate") finds the "=" button in the HTML.
// .addEventListener("click", calculate) means: "when that button is clicked,
// run the calculate function above." Note we write calculate WITHOUT (),
// because we're handing over the function to be called later, not calling it now.
document.getElementById("calculate").addEventListener("click", calculate);


// ============================================================
// Challenge ideas to try:
// - Show the full sum, e.g. "12 + 3 = 15", instead of just the answer.
// - Add a "C" (clear) button that empties both inputs and the result.
// - Add a percentage (%) or power option to the dropdown and the switch.
// - Round long decimals with Math.round(result * 100) / 100.
// ============================================================
