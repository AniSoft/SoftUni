function catWalking(input) {
    let minute = Number(input[0]);
    let walk = Number(input[1]);
    let calorie = Number(input[2]);

    let total = walk * minute * 5;

    if (total >= calorie * 0.5) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${total}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${total}.`);
    }
}

catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"])