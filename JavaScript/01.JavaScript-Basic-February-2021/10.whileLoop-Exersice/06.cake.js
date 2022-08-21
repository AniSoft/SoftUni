function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let cake = w * l;
    let command = input[index];
    index++;
    while (command !== "STOP") {
        let pieces = Number(command);
        cake -= pieces;

        if (cake < 0) {
            break;
        }
        command = input[index];
        index++;
    }

    if (cake >= 0) {
        console.log(`${cake} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);