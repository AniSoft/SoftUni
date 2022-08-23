function negativePositiveNumbers(nums) {
    let result = [];
    for (let num of nums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let num of result) {
        console.log(num);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);
//negativePositiveNumbers([3, -2, 0, -1]);