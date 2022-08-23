function rounding(number, percision) {
    if (percision > 15) {
        percision = 15;
    }
    const roundedNumber = number.toFixed(percision);
    const withoutZeroz = parseFloat(roundedNumber);
    console.log(withoutZeroz);
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
rounding(13.563, 20);