function safari(input) {
    let budget = Number(input[0]);
    let oil = Number(input[1]);
    let day = input[2];

    let oilPrice = 2.10;
    let gidPrice = 100;

    let total = 0;
    let discount = 0;
    if (day == "Saturday") {
        discount = 0.1;
    } else if (day == "Sunday") {
        discount = 0.2;
    }

    total = (gidPrice + oil * oilPrice);
    total = total - total * discount;

    let diff = budget-total
    if (budget >= total) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${(Math.abs(diff).toFixed(2))} lv.`);
    }
}

safari(["1000", "10", "Sunday"]);
safari(["120", "30", "Saturday"]);
safari(["105.20", "15", "Sunday"]);