function maxNumber(input) {
    let index = 0;
    let current = input[index];
    let max = Number.MIN_SAFE_INTEGER;
    while (current != "Stop") {
        let currentNumber = Number(current);
        if (max < currentNumber) {
            max = currentNumber;
        }
        index++;
        current = input[index];
    }
    console.log(max);
}

maxNumber(["100","99","80","70","Stop"]);
maxNumber(["-10","20","-30","Stop"]);
maxNumber(["45","-20","7","99","Stop"]);
maxNumber(["999","Stop"]);
maxNumber(["-1","-2","Stop"]);