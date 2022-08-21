function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let rent = days - 1;
    let price = 0;

    switch (room) {
        case "room for one person":
            if (rent <= 10) {
                price = rent * 18;
            } else if (rent < 15) {
                price = rent * 18;
            } else if (rent >= 15) {
                price = rent * 18;
            }
            break;
        case "apartment":
            if (rent <= 10) {
                price = rent * 25 * 0.70;
            } else if (rent < 15) {
                price = rent * 25 * 0.65;
            } else if (rent >= 15) {
                price = rent * 25 * 0.5;
            }
            break;

        case "president apartment":
            if (rent <= 10) {
                price = rent * 35 * 0.9;
            } else if (rent < 15) {
                price = rent * 35 * 0.85;
            } else if (rent >= 15) {
                price = rent * 35 * 0.8;
            }
            break;

        default:
            break;
    }

    if (rating == "positive") {
        price = price * 1.25;
    } else if (rating == "negative") {
        price = price * 0.9;
    }

    console.log(price.toFixed(2));

}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);