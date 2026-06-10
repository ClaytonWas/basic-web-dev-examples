// ============================================================
// table.js — The behaviour for the Times Table Grid
//
// JavaScript makes the page DO things.
// The big idea: a CLASSIC COUNTING LOOP, and then a loop INSIDE
// a loop. The outer loop builds each ROW; the inner loop builds
// every CELL in that row. 10 rows x 10 cells = 100 cells, from
// about 20 lines of code.
// It is linked at the bottom of index.html using:
//     <script src="table.js"></script>
// ============================================================


// How big the table is. Try changing this to 12 or 15 and reloading!
const SIZE = 10;

// Find the empty container in the HTML where the table will go.
const tableArea = document.getElementById("tableArea");

// Make the <table> element itself (it isn't on the page yet).
const table = document.createElement("table");


// ── THE HEADER ROW ──
// A classic FOR loop has three parts, separated by semicolons:
//   let col = 1;     → START:  make a counter, beginning at 1
//   col <= SIZE;     → KEEP GOING WHILE: this is true
//   col++            → EACH TIME: add 1 to the counter (same as col = col + 1)
const headerRow = document.createElement("tr");
headerRow.appendChild(document.createElement("th")); // empty corner cell

for (let col = 1; col <= SIZE; col++) {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);


// ── THE GRID: A LOOP INSIDE A LOOP ──
// Read it like a clock: the OUTER loop (row) is the hour hand, the
// INNER loop (col) is the minute hand. For ONE tick of row, col runs
// through ALL of its values. So the cells get built in this order:
//   row 1: col 1, 2, 3 ... 10
//   row 2: col 1, 2, 3 ... 10
//   ...and so on.
for (let row = 1; row <= SIZE; row++) {

    // Each pass of the OUTER loop makes one new row.
    const tr = document.createElement("tr");

    // The row starts with a header cell showing the row number.
    const rowHeader = document.createElement("th");
    rowHeader.textContent = row;
    tr.appendChild(rowHeader);

    // Now the INNER loop fills that row with cells.
    for (let col = 1; col <= SIZE; col++) {
        const cell = document.createElement("td");

        // The answer for this cell is just row x col.
        cell.textContent = row * col;

        // An IF inside the loop: highlight the perfect squares
        // (where the row and column number are the same: 1, 4, 9, 16...).
        if (row === col) {
            cell.className = "square"; // links to .square in index.css
        }

        tr.appendChild(cell);
    }

    // The finished row gets attached to the table.
    table.appendChild(tr);
}

// Finally, attach the finished table to the page.
tableArea.appendChild(table);


// ============================================================
// Challenge ideas to try:
// - Change SIZE to 12. How many cells did that one change create?
// - Highlight a whole row (say, the 7 times table) a different colour.
// - Highlight every EVEN answer. Hint: number % 2 === 0 means even.
// - Add an <input> and a button so the user can pick the size.
// - Predict before you reload: if SIZE is 4, what order do the
//   (row, col) pairs get built in? Write them down, then check
//   with console.log(row, col) inside the inner loop. (F12 to see.)
// ============================================================
