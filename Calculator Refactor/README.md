# Calculator Refactor

The same calculator as before — on the outside. On the inside, the maths has been pulled out into its own `calculate(num1, operator, num2)` function that **returns** its answer instead of writing it to the page. This is the lesson where `return` finally clicks.

**Concepts:** functions that **return values**, return vs display (the single most important idea before Python), composing function calls (`calculate(10, "*", calculate(1, "+", 1))`), refactoring (improving code without changing behaviour), separation of jobs (read / validate / compute / show), `null`
**Builds on:** [Calculator](../Calculator/) — same page, same behaviour. Diff the two `calculator.js` files to see exactly what a refactor is.

## Files

- `calculator.html` — the page (visually identical to the original Calculator)
- `calculator.js` — the refactored logic

## Usage

1. Open `calculator.html` in a browser — it works exactly like the original.
2. Open the console (F12) and try `calculate(2, "+", 3)` — you get `5` back, directly.
3. Try `calculate(2, "+", 3) * 10` and `calculate(10, "*", calculate(1, "+", 1))` — returned values can be *used*, not just looked at.

## How It Works

- `calculate()` is a **pure** function: numbers in, number out. No `getElementById`, no `textContent`. It `return`s the answer (and `null` for an unknown operator).
- Because `return` exits the function immediately, the `switch` needs no `break` statements — compare with the original.
- The click handler keeps all the page work: read inputs, validate, call `calculate()`, display what comes back. Each job lives in its right place.

## Why Return Matters (the point of this lesson)

A function that **displays** its answer dead-ends it — the value is on the screen, out of reach of the rest of the program. A function that **returns** its answer hands it back to the caller, who can store it, combine it, or pass it onward:

```javascript
calculate(2, "+", 3)            // → 5
calculate(2, "+", 3) * 10       // → 50
double(3) + double(5)           // → 16, if double returns n * 2
```

Students coming from Scratch almost always conflate "say" with "answer" — this lesson separates them. In Python this distinction is everywhere (`print()` vs `return`), so it must land *before* the switch.

## How to Teach It

1. **Re-run the original.** Open the old Calculator, then ask: "in the console, can we ask it what 2 + 3 is, without clicking anything?" Try it — you can't. The maths is trapped inside the click handler.

2. **Extract the function.** Together, copy the `switch` into a new `calculate(num1, operator, num2)` function and change each `result = ...; break;` into a plain `return ...;`. Discuss why `break` disappears (return already exits).

3. **Play in the console.** `calculate(2, "+", 3)`. Then `calculate(2, "+", 3) * 10`. Then the nested call. This is the "aha" — returned values are *ingredients*, not just output.

4. **Rewire the handler.** The handler now reads, validates, calls, displays. Read it top to bottom like a to-do list.

5. **The undefined experiment.** Change one `return` to `console.log` and click `=`. The page shows `undefined` — the function *displayed* the answer but *returned* nothing. This single broken moment teaches more than any explanation. Change it back.

## Challenges

- Compute `(5 + 3) * (10 - 4)` in the console using only `calculate()` calls.
- Add a `"^"` (power) case — notice the handler needs zero changes.
- Write `double(n)`, then predict and verify `double(3) + double(5)`.
- Discuss: should the divide-by-zero check live in the handler or inside `calculate()`? (There are decent arguments both ways — that conversation *is* software design.)
