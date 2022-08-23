function distinctArray(numbers) {
    let resultArray = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (!resultArray.includes(currentNumber)) {
            resultArray.push(currentNumber);
        }

    }

    console.log(resultArray.join(' '));
}

distinctArray([1, 2, 3, 4]);
//distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
//distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);