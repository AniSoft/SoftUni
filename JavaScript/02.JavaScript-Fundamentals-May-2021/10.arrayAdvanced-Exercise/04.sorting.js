function sorting(numbers) {
    let sortedNumbers = [];
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++) {
        let number;
        if (i % 2 === 0) {
            number = Math.max(...numbers);
        } else {
            number = Math.min(...numbers);
        }
        sortedNumbers.push(number);
        numbers.splice(numbers.indexOf(number), 1);
    }

    console.log(sortedNumbers.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);