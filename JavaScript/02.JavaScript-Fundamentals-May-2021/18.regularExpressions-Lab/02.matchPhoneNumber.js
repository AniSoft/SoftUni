function solve(text) {
    let output = [];
    let pattern = /\+359(?<split>[- ])2\k<split>\d{3}\k<split>\d{4}\b/g;
    while (valid = pattern.exec(text)) {
        output.push(valid[0]);
    }
    console.log(output.join(', '))
}

solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");