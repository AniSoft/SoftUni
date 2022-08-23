function smallestThreeNumber(firstNumber, secondNumber, thirdNumber) {
    let smallestNumber = Math.min(firstNumber, secondNumber, thirdNumber);

    return smallestNumber;
}

console.log(smallestThreeNumber(2, 5, 3));
console.log(smallestThreeNumber(600, 342, 123));
console.log(smallestThreeNumber(25, 21, 4));