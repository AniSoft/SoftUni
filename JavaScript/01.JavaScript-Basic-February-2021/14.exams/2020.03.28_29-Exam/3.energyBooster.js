function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let sets = Number(input[2]);

    let total = 0;
    let price = 0;
    let discount = 0;
    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                price = 2 * 56;
            } else if (size === "big") {
                price = 5 * 28.70;
            }
            break;
        case "Mango":
            if (size === "small") {
                price = 2 * 36.66;
            } else if (size === "big") {
                price = 5 * 19.60;
            }
            break;
        case "Pineapple": 
            if (size === "small") {
                price = 2 * 42.10;
            } else if (size === "big") {
                price = 5 * 24.80;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                price = 2 * 20;
            } else if (size === "big") {
                price = 5 * 15.20;
            }
            break;
        default:
            break;
    }

    total = sets * price;
    if (total >= 400 && total <= 1000) {
        discount = 0.15;
    } else if (total > 1000) {
        discount = 0.5;
    }

    total = total * (1 - discount);
    console.log(`${total.toFixed(2)} lv.`);

}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);