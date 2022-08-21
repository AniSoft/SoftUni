function minNumber(input) {
    let index = 0;
    let current = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (current != "Stop") {
        let currentNumber = Number(current);
        if (min > currentNumber) {
            min = currentNumber;
        }
        index++;
        current = input[index];
    }
    console.log(min);
}

minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);