function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let price = 0;
    let discount = 1;
    let total = 0;
    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Winter":
                    price = 45000;
                    break;
                case "Summer":
                    price = 40000;
                    break;
                default:
                    break;
            }
            break;

        case "Sofia":
            switch (season) {
                case "Winter":
                    price = 17000;
                    break;
                case "Summer":
                    price = 12500;
                    break;
                default:
                    break;
            }
            break;

        case "London":
            switch (season) {
                case "Winter":
                    price = 24000;
                    break;
                case "Summer":
                    price = 20250;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    if (destination == "Dubai") {
        discount = 0.7;
    } else if (destination == "Sofia") {
        discount = 1.25;
    }

    total = price * days * discount;

    let diff = budget - total;
    if (diff >= 0) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${Math.abs(diff).toFixed(2)} leva more!`);
    }
}

//movieDestination(["400000", "Sofia", "Winter", "20"]);
//movieDestination(["1000000", "Dubai", "Summer", "5"]);
movieDestination(["200000", "London", "Summer", "7"]);