function addSubstract(list) {
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < list.length; i++) {
        let currentNumber = list[i];
        let newNumber = 0;

        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
            list[i] = newNumber;
        } else {
            newNumber = currentNumber - i;
            list[i] = newNumber;
        }

        oldSum += currentNumber;
        newSum += newNumber;
    }

    console.log(list);
    console.log(oldSum);
    console.log(newSum);
}

addSubstract([5, 15, 23, 56, 35]);
addSubstract([-5, 11, 3, 0, 2]);