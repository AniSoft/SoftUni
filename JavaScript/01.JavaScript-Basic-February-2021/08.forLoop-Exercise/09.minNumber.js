function minNumbers(input) {
    let n = Number(input[0]);

    let bigNumber = 9999999;
    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        if (number < bigNumber) {
            bigNumber = number;
        }
    }
    console.log(bigNumber);
}

minNumbers(["2", "100", "99"]);
minNumbers(["3", "-10", "20", "-30"]);
minNumbers(["4", "45", "-20", "7", "99"]);
minNumbers(["1", "999"]);
minNumbers(["2", "-1", "-2"]);