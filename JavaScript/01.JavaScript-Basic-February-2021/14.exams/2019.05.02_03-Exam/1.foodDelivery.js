function food(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);

    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetarianPrice = 8.15;

    let total = 0;
    let menu = 0;

    menu = chicken * chickenPrice + fish * fishPrice + vegetarian * vegetarianPrice;
    total = menu + menu* 0.2 + 2.50;

    console.log(`Total: ${total.toFixed(2)}`);
}

food(["2", "4", "3"]);
food(["10", "0", "6"]);