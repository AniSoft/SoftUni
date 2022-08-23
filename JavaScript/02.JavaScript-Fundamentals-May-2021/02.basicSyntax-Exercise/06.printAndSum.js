function printSum(startNumber, endNumber) {
    let resultString = '';
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        resultString += ` ${i}`;
        sum += i;
    }

    console.log(resultString);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);
console.log('-------------');
printSum(0, 26);
console.log('-------------');
printSum(50, 60);