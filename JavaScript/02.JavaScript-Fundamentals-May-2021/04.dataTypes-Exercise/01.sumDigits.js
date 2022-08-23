function sumDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;

    for (let digit of numberAsString) {
        sum += Number(digit);
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);