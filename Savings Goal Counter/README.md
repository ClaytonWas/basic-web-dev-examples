# Savings Goal Counter

"You're saving $15 a week for a $120 skateboard — how many weeks until you can buy it?" The page answers with a week-by-week breakdown, powered by a `while` loop that runs until the goal is reached.

**Concepts:** the `while` loop, the **accumulator pattern** (`saved = saved + perWeek`), counters, **what makes a loop stop** (and what makes it run forever), guarding against infinite loops, `break`, input validation
**Builds on:** [Times Table Grid](../Times%20Table%20Grid/) — a `for` loop repeats a *known* number of times; a `while` loop repeats an *unknown* number of times, until a condition stops being true.

## Files

- `index.html` — the page markup (three inputs, a button, an answer line, a log area)
- `index.css` — styling
- `savings.js` — the while loop and its guards

## Usage

1. Open `index.html` in a browser.
2. Enter what you're saving for, what it costs, and what you can save per week.
3. Click **"How long will it take?"** — the answer appears, plus a week-by-week breakdown.
4. Try entering 0 for the weekly amount — the page refuses, and the comment in `savings.js` explains exactly why that guard exists.

## How It Works

- Two variables drive the loop: `saved` (the accumulator, starts at 0) and `weeks` (the counter).
- `while (saved < goal)` runs one pass per week: add `perWeek` to `saved`, add 1 to `weeks`, append a progress line to the page.
- The loop ends the moment the condition stops being true.
- The `perWeek <= 0` validation isn't just politeness — if the weekly amount were 0, `saved` would never reach `goal` and the loop would never end. This is the lesson's core safety idea: **before writing a while loop, ask what guarantees it will eventually stop.**

## How to Teach It

The infinite-loop moment is the heart of this lesson — let the student *almost* experience it, safely.

1. **Page shell.** Create `index.html` with the inputs, button, `#answer`, and `#log`. Open it — controls show, nothing happens yet.

2. **Trace before code.** On paper: goal 10, save 4 per week. Week 1 → 4, week 2 → 8, week 3 → 12, stop. Ask "how did we know when to stop?" The answer ("when we reached the goal") *is* the while condition.

3. **The happy path.** Write the click handler: read and parse the inputs, then the `while` loop with `saved`, `weeks`, and a log line per pass. Test with the paper example — the page should agree with the hand trace.

4. **Break it safely (the key moment).** Ask: "what happens if we forget `saved = saved + perWeek`?" Let the student predict. Then, instead of actually deleting it (which freezes the tab), run the safety-brake version from the bottom of `savings.js` in the console (F12) — it uses a `safety` counter and `break` to catch the runaway loop after 1000 laps. Un-comment the line, run again, watch it end normally. Now the student has *seen* an infinite loop and knows exactly which line prevents it.

5. **Guard the inputs.** Add the `isNaN` check, then the `perWeek <= 0` check — and connect it back to step 4: a zero weekly amount is the same infinite loop wearing a disguise.

## Challenges

- Every 4th week, add a $5 bonus (`weeks % 4 === 0`).
- Show how much is still missing each week.
- Show the leftover money if the final week overshoots the goal.
- Rebuild it with a `for` loop and discuss why that's awkward (you'd need to know the week count before the loop starts — the very thing you're computing).
