function accountBalance(input) {
    let sum = 0;
    let index = 0;
    let current = input[index];

    while (current != "NoMoreMoney") {
        let num = Number(current);

        if (num < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            sum += num;
            console.log(`Increase: ${num.toFixed(2)}`);
        }
        index++;
        current = input[index];
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);