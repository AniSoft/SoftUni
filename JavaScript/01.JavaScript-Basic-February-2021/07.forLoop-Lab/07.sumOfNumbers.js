function sumNumber(input) {
    let num = input[0];
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);
        result += currentNum;
    }
    console.log(`The sum of the digits is:${result}`);
}

sumNumber(["1234"]);
sumNumber(["1234"]);