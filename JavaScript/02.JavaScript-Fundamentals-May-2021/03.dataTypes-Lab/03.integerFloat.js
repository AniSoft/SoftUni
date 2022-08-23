function integerFloat(a, b, c) {
    let sum = a + b + c;

    let rounded = Math.round(sum);
    if (sum == rounded) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

integerFloat(9, 100, 1.1);
integerFloat(100, 200, 303);