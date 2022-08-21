function moving(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);

    let availableSpace = x * y * z;
    let index = 3;

    while (input[index] != "Done"){
        availableSpace = availableSpace - Number(input[index]);
        if (availableSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(availableSpace)} Cubic meters more.`);
            break;
        }
        index++;
    }

    if (availableSpace >= 0) {
        console.log(`${availableSpace} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);