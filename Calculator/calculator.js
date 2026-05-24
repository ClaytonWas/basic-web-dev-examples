document.getElementById("calculate").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("first").value);
    var num2 = parseFloat(document.getElementById("second").value);
    var operator = document.getElementById("operator").value;
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Please select a valid operator.");
            return;
    }

    document.getElementById("result").textContent = result;
});