function lastNumber(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let elements = result.slice(-k);

        let current = 0;
        for (let num of elements) {
            current += num;
        }

        result.push(current);
    }
    console.log(result.join(' '));
}

lastNumber(6, 3);
lastNumber(8, 2);