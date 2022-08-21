function wordSwimmingPool(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time1m = Number(input[2]);

    let total = distance * time1m;
    let water = Math.floor(distance / 15) * 12.5;
    let final = total + water;

    if (record <= final) {
        console.log(`No, he failed! He was ${(final - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${final.toFixed(2)} seconds.`);
    }
}

wordSwimmingPool(["10464", "1500", "20"]);
wordSwimmingPool(["55555.67", "3017", "5.03"]);