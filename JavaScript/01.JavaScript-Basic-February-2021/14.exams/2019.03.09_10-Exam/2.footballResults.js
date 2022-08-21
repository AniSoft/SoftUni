function football(input) {
    let first = input[0];
    let second = input[1];
    let third = input[2];

    let win = 0;
    let lost = 0;
    let drawn = 0;

    if (first[0] > first[2]) {
        win += 1;
    } else if (first[0] < first[2]) {
        lost += 1;
    } else {
        drawn += 1;
    }

    if (second[0] > second[2]) {
        win += 1;
    } else if (second[0] < second[2]) {
        lost += 1;
    } else {
        drawn += 1;
    }

    if (third[0] > third[2]) {
        win += 1;
    } else if (third[0] < third[2]) {
        lost += 1;
    } else {
        drawn += 1;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn}`);
}

football(["3:1", "0:2", "0:0"]);
football(["4:2", "0:3", "1:0"]);
football(["0:2", "0:1", "3:3"]); 