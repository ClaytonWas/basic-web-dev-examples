# Bug Hunt

A deliberately broken page. Four small features, each hiding exactly one bug in `bugs.js`. The student's job is to find and fix all four using the three debugging moves: **run it, read it, probe it** (with `console.log` and the F12 console). This is the capstone before the Python readiness test — the four bugs are the four classic mistakes every beginner makes.

**Concepts:** debugging method, reading error symptoms, the F12 Console, `console.log` probing, and the big four bugs: `=` vs `==`, infinite loops, out-of-range indexes, and printing instead of returning
**Builds on:** everything — Calculator (validation), Savings Goal Counter (loop guards), Playlist Stepper (bounds), Calculator Refactor (return values).

## Files

- `index.html` — the page (innocent — do not change)
- `index.css` — styling (also innocent)
- `bugs.js` — four features, four bugs

## Usage

1. Open `index.html` in a browser.
2. Try each feature and watch it misbehave.
3. Open `bugs.js` and the Console (F12), find each bug, fix it, reload, and confirm the feature works.
4. Graduated hints are at the bottom of `bugs.js`.

## The Rules of the Hunt

- Each feature has exactly **one** bug.
- The **comments are all true** — they describe what the code is *supposed* to do. When a comment and its code disagree, that's the bug.
- The safety brake in Hunt 2 is **not** the bug — it's there so the runaway loop can't freeze the tab. Leave it in.

## How to Teach It

Don't point at lines. Teach the loop: *symptom → hypothesis → probe → fix → verify.*

1. **Demonstrate the method on Hunt 1 together.** Symptom: every password works. Hypothesis: the if is always true. Probe: read the condition character by character. Fix, reload, verify both a right and a wrong guess.
2. **Release them on Hunts 2 to 4 solo.** Only intervene with questions ("what does the console say?", "which direction is count moving?", "how many finishers are there, and what's the last position?").
3. **Debrief each fix.** Have the student say, in one sentence, what the bug *category* was — that vocabulary is exactly what Sections B and C of the readiness test reward.

## ⚠️ Tutor's Answer Key (spoilers)

| Hunt | Bug | Fix | Category |
|------|-----|-----|----------|
| 1. Password Gate | `if (guess = "acorn")` assigns instead of compares, so the condition is always truthy | `if (guess === "acorn")` | Assignment vs comparison |
| 2. Launch Countdown | `count = count + 1` moves the count *away* from 0, so `count > 0` never becomes false | `count = count - 1` | Infinite loop (condition never becomes false) |
| 3. Medal Ceremony | `finishers[5]` — five items means valid indexes are 0 to 4; index 5 doesn't exist, so it's `undefined` | `finishers[4]`, or better, `finishers[finishers.length - 1]` | Out-of-range index / off-by-one |
| 4. Tip Calculator | `addTip()` logs the answer to the console but returns nothing, so `total` receives `undefined` | `return bill * 1.2;` | Printing instead of returning |

The Hunt 3 debrief is a good place to push for `finishers.length - 1` over the hard-coded `4` — ask "what happens to your fix if a sixth runner joins?"

## Challenges

- Write a fifth buggy feature for someone else to hunt (writing a *good* bug means understanding it deeply).
- For each bug, write the one-line `console.log` that exposes it fastest.
- Speed run: fix all four from a fresh copy in under 10 minutes.
