function calculator(num1, operator, num2) {
    let result;

    if (operator === "+") {
        result = (num1 + num2);
    } else if (operator === "-") {
        result = (num1 - num2);
    } else if (operator === "*") {
        result = (num1 * num2);
    } else if (operator === "/") {
        result = (num1 / num2);
    }

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);


function calculator(num1, operator, num2) {
    console.log(eval(`${num1} ${operator} ${num2}`).toFixed(2));
}