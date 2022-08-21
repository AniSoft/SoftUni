function mobileOperator(input) {
    let term = input[0];
    let type = input[1];
    let addInternet = input[2];
    let months = Number(input[3]);

    let price = 0;
    let total = 0;
    if (term == "one") {
        switch (type) {
            case "Small":
                price = 9.98;
                break;
            case "Middle":
                price = 18.99;
                break;
            case "Large":
                price = 25.98;
                break;
            case "ExtraLarge":
                price = 35.99;
                break;

            default:
                break;
        }
    } else if (term == "two") {
        switch (type) {
            case "Small":
                price = 8.58;
                break;
            case "Middle":
                price = 17.09;
                break;
            case "Large":
                price = 23.59;
                break;
            case "ExtraLarge":
                price = 31.79;
                break;

            default:
                break;
        }

    }

    if (addInternet == "yes") {
        if (price <= 10) {
            price += 5.5;
        } else if (price <= 30) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }

    total = months * price;
    if (term == "two") {
        total = total - total * 3.75 / 100;
    }
    console.log(`${total.toFixed(2)} lv.`);
}

mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
mobileOperator(["two", "ExtraLarge", "yes", "20"]);
mobileOperator(["two", "Small", "yes", "20"]);