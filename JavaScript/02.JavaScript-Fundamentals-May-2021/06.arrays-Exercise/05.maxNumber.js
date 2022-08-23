function maxNumber(list) {
    let topIntegers = [];

    for (let i = 0; i < list.length; i++) {
        let currentNumber = list[i];
        let isTop = true;

        for (let j = i + 1; j < list.length; j++) {
            let rightNumber = list[j];
            if (rightNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topIntegers.push(currentNumber);
        }
    }
    console.log(topIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);
//maxNumber([14, 24, 3, 19, 15, 17]);
//maxNumber([41, 41, 34, 20]);
//maxNumber([27, 19, 42, 2, 13, 45, 48]);