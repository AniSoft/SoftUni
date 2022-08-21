function operation(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    switch (operator) {
        case "+":
            result = n1 + n2;
            if (result % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
            }
            break;

        case "-":
            result = n1 - n2;
            if (result % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
            }
            break;

        case "*":
            result = n1 * n2;
            if (result % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
            }
            break;

        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 / n2;
                console.log(`${n1} / ${n2} = ${result}`);
            }
            break;

        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;

        default:
            break;
    }
}

operation(["10", "12", "+"]);
operation(["10", "13", "+"]);

operation(["123", "12", "/"]);
operation(["112", "0", "/"]);

operation(["10", "1", "-"]);
operation(["10", "2", "-"]);
operation(["10", "10", "-"]);

operation(["10", "3", "%"]);
operation(["10", "0", "%"]);

operation(["7", "3", "*"]);
operation(["7", "2", "*"]);
operation(["7", "0", "*"]);


operation(["112", "0", "/"]);

operation(["0", "0", "/"]);
operation(["0", "4", "/"]);