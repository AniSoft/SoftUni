function devidedByNine(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let result = 0;
    let resultString = "";
    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 == 0) {
            result += i;
            resultString = resultString + i + "\n";
        }

    }

    console.log(`The sum: ${result}`);
    console.log(resultString);
}

devidedByNine(["100", "200"]);