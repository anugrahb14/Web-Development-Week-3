function calculate(operation) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const result = document.getElementById("result");

    let answer;

    if (operation === "+") {
        answer = num1 + num2;
    } 
    else if (operation === "-") {
        answer = num1 - num2;
    } 
    else if (operation === "*") {
        answer = num1 * num2;
    } 
    else if (operation === "/") {
        if (num2 === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        answer = num1 / num2;
    }

    result.textContent = "Result: " + answer;
}