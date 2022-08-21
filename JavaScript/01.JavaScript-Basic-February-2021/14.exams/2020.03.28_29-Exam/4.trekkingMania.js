function trekkingMania(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;

    let countMusala = 0;
    let countMonblan = 0;
    let countKilimangaro = 0;
    let countK2 = 0;
    let countEverest = 0;
    let total = 0;
    for (let i = 1; i <= count; i++) {
        let group = Number(input[index]);
        index++;

        total += group;
        if (group <= 5) {
            countMusala += group;
        } else if (group >= 6 && group <= 12) {
            countMonblan += group;
        } else if (group >= 13 && group <= 25) {
            countKilimangaro += group;
        } else if (group >= 26 && group <= 40) {
            countK2 += group;
        } else if (group >= 41) {
            countEverest += group;
        }
    }

    console.log(`${(countMusala / total * 100).toFixed(2)}%`);
    console.log(`${(countMonblan / total * 100).toFixed(2)}%`);
    console.log(`${(countKilimangaro / total * 100).toFixed(2)}%`);
    console.log(`${(countK2 / total * 100).toFixed(2)}%`);
    console.log(`${(countEverest / total * 100).toFixed(2)}%`);
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);