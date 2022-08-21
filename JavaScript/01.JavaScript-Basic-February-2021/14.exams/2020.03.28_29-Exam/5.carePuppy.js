function carePuppy(input) {
    let index = 0;
    let food = Number(input[index]);
    index++;

    let total = 0;
    command = input[index];
    index++;
    while (command != "Adopted") {
        let eat = Number(command);
        total += eat;

        command = input[index];
        index++
    }

    let diff = food * 1000 - total;
    if (diff >= 0) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(diff)} grams more.`);
    }
}

carePuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);

carePuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"]);


carePuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"]);
