function firstLastNumber(arr) {
    let k = arr.shift();

    let forward = [];
    for (let i = 0; i < k; i++) {
        forward.push(arr[i]);
    }

    let backwards = [];
    for (let i = arr.length - k; i < arr.length; i++) {
        backwards.push(arr[i]);
    }

    console.log(forward.join(' '));
    console.log(backwards.join(' '));
}

firstLastNumber([2, 7, 8, 9]);
// firstLastNumber([3, 6, 7, 8, 9]);