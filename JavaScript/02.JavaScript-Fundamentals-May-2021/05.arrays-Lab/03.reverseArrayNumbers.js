function reverseArrayNumbers(n, array) {
    let sliceArray = [];
    for (let i = 0; i < n; i++) {
        sliceArray.push(array[i]);
    }

    let result = [];
    for (let i = sliceArray.length - 1; i >= 0; i--) {
        result.push(sliceArray[i]);
    }

    console.log(result.join(' '));
}

reverseArrayNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayNumbers(4, [-1, 20, 99, 5]);
reverseArrayNumbers(2, [66, 43, 75, 89, 47]);