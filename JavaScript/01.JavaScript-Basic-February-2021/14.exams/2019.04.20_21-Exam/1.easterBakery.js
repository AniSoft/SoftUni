function bakery(input) {
    let mealPrice = Number(input[0]);
    let meal = Number(input[1]);
    let sugar = Number(input[2]);
    let eggs = Number(input[3]);
    let maya = Number(input[4]);

    let priceSugar = mealPrice * 0.75;
    let priceEggs = mealPrice * 1.1;
    let priceMaya = priceSugar * 0.2;

    let total = 0;
    total = meal * mealPrice + sugar * priceSugar + eggs * priceEggs + maya * priceMaya;

    console.log(`${total.toFixed(2)}`);

}

bakery(["50", "10", "3.5", "6", "1"]);
bakery(["63.44", "3.57", "6.35", "8", "2"]);