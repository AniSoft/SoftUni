function fitnessCard(input) {
    let budget = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0;
    switch (sport) {
        case "Gym":
            if (sex == "m") {
                price = 42;
            } else if (sex == "f") {
                price = 35;
            }
            break;

        case "Boxing":
            if (sex == "m") {
                price = 41;
            } else if (sex == "f") {
                price = 37;
            }
            break;

        case "Yoga":
            if (sex == "m") {
                price = 45;
            } else if (sex == "f") {
                price = 42;
            }
            break;

        case "Zumba":
            if (sex == "m") {
                price = 34;
            } else if (sex == "f") {
                price = 31;
            }
            break;

        case "Dances":
            if (sex == "m") {
                price = 51;
            } else if (sex == "f") {
                price = 53;
            }
            break;

        case "Pilates":
            if (sex == "m") {
                price = 39;
            } else if (sex == "f") {
                price = 37;
            }
            break;
        default:
            break;
    }

    if (age <= 19) {
        price = price * 0.8;
    }

    let diff = budget - price;
    if (diff >= 0) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${Math.abs(diff).toFixed(2)} more.`);
    }
}

fitnessCard(["50", "m", "23", "Gym"]);
fitnessCard(["20", "f", "15", "Yoga"]);
fitnessCard(["10", "m", "50", "Pilates"]);