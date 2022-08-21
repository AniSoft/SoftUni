function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);

    let totalPrise = 0;
    switch (product) {
        case "coffee":
            switch (city) {
                case "Sofia":
                    totalPrise = 0.5 * count;
                    break;
                case "Plovdiv":
                    totalPrise = 0.4 * count;
                    break;
                case "Varna":
                    totalPrise = 0.45 * count;
                    break;
                default:
                    break;
            }
            break;

        case "water":
            if (city == "Sofia") {
                totalPrise = 0.8 * count;
            } else if (city == "Plovdiv") {
                totalPrise = 0.7 * count;
            } else if (city == "Varna") {
                totalPrise = 0.7 * count;
            }
            break;

        case "beer":
            if (city == "Sofia") {
                totalPrise = 1.2 * count;
            } else if (city == "Plovdiv") {
                totalPrise = 1.15 * count;
            } else if (city == "Varna") {
                totalPrise = 1.1 * count;
            }
            break;

        case "sweets":
            if (city == "Sofia") {
                totalPrise = 1.45 * count;
            } else if (city == "Plovdiv") {
                totalPrise = 1.30 * count;
            } else if (city == "Varna") {
                totalPrise = 1.35 * count;
            }
            break;

        case "peanuts":
            if (city == "Sofia") {
                totalPrise = 1.6 * count;
            } else if (city == "Plovdiv") {
                totalPrise = 1.5 * count;
            } else if (city == "Varna") {
                totalPrise = 1.55 * count;
            }
            break;

        default:
            break;
    }
    console.log(totalPrise);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);