function simpleCalculator(a, b, operator) {
    let operators = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    }

    let result = operators[operator](a, b);
    console.log(result);
}

simpleCalculator(5, 5, 'multiply');