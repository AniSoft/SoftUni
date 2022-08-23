function mathpower(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    console.log(result);
}

mathpower(2, 8);
mathpower(3, 4);