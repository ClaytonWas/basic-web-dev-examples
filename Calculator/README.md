# Calculator

A simple web-based calculator that performs basic arithmetic on two numbers.

**Concepts:** reading form inputs, `parseFloat`, `switch` statements, validation with `isNaN`, guarding edge cases (divide-by-zero), writing results back to the DOM
**Builds on:** [QuoteTyper](../QuoteTyper/) — more event handling, plus branching logic and input validation.

## Files

- `calculator.html` — the page markup
- `calculator.js` — the calculation logic

## Usage

1. Open `calculator.html` in a browser.
2. Enter a number in the first input.
3. Pick an operator (`+`, `-`, `*`, `/`) from the dropdown.
4. Enter a number in the second input.
5. Click `=` to see the result below.

## How It Works

The script attaches a click handler to the `=` button. On click it:

1. Reads both inputs and parses them with `parseFloat`.
2. Validates them — if either isn't a number, it alerts and stops.
3. Runs a `switch` on the selected operator to compute the result.
4. Guards against division by zero with its own alert.
5. Writes the result into the `<p id="result">` element.

## How to Teach It

Get a working, visible calculator on screen first — then harden it. Each step leaves you with something you can run and see.

1. **Markup that shows.** Create `calculator.html` with both inputs, the operator `<select>`, the `=` button, and the result `<p>`. Link the script at the end of the body. Open it — you should see the controls, even though nothing happens yet.
2. **Make it calculate (happy path).** Add `calculator.js`. Read both inputs, parse with `parseFloat`, run the `switch` for `+`, `-`, `*`, `/`, and write the answer into `#result`. It now works for valid input — and visibly misbehaves on bad input (`NaN`, division by zero). That's expected at this stage; the user can see it doing something.
3. **Guard non-numbers.** Add the `isNaN` check on the parsed values, alerting and returning early when either input isn't a number.
4. **Guard divide-by-zero.** Inside the `/` case, alert and return when the divisor is `0`.
5. **Guard the operator.** Add the `default` case for an unrecognized operator.

Steps 3–5 only tighten behaviour that already runs, so you can verify each guard against the working version from step 2.