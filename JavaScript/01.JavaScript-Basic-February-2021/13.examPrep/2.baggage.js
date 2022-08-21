function baggage(input) {
    let biggestCasePrice = Number(input[0]);
    let weight = Number(input[1]);
    let dayLeft = Number(input[2]);
    let bagCount = Number(input[3]);

    middleCasePrice = biggestCasePrice * 0.5;
    smallestCasePrice = biggestCasePrice * 0.2;

    let finalPrice = 0
    if (weight > 20) {
        finalPrice = biggestCasePrice * bagCount;
    } else if (weight < 10) {
        finalPrice = smallestCasePrice * bagCount;
    } else {
        finalPrice = middleCasePrice * bagCount;
    }

    if (dayLeft > 30) {
        finalPrice += finalPrice * 0.1;
    } else if (dayLeft < 7) {
        finalPrice += finalPrice * 0.4;
    } else {
        finalPrice += finalPrice * 0.15;
    }

    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);
}

baggage([30, 18, 15, 2]);
baggage([25.50, 5, 36, 6]);