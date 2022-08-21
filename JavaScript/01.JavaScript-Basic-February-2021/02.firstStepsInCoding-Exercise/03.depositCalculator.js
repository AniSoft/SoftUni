function depositCalculator(input) {
    let sum = Number(input[0]);
    let depositTime = Number(input[1]);
    let yearProcentage = Number(input[2]);

    let totalSum = sum + depositTime * ((sum * yearProcentage*0.01) / 12);
    console.log(totalSum);
}

depositCalculator(["200", "3", "5.7"]);