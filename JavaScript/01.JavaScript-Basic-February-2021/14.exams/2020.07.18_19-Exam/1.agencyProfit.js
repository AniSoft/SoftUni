function profit(input) {
    let name = input[0];
    let countBig = Number(input[1]);
    let countSmall = Number(input[2]);
    let bigPrice = Number(input[3]);
    let tax = Number(input[4]);

    let smallPrice = bigPrice * 0.3;
    let total = 0;

    total = countBig * (bigPrice + tax) + countSmall * (smallPrice + tax)
    let profit = total * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

profit(["WizzAir", "15", "5", "120", "40"]);
profit(["Ryanair","60","23","158.96","39.12"]);