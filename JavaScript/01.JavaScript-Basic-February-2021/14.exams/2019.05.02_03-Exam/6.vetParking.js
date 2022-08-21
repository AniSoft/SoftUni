function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);

    let price = 0;
    let total = 0;
    for (let i = 1; i <= days; i++) {
        let dayTotal = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 == 0 && j % 2 == 1) {
                price = 2.5;
            } else if (i % 2 == 1 && j % 2 == 0) {
                price = 1.25;
            } else {
                price = 1;
            }
            dayTotal += price;
        }
        console.log(`Day: ${i} - ${dayTotal.toFixed(2)} leva`);
        total += dayTotal;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

//vetParking(["2", "5"]);
vetParking(["5", "2"]);