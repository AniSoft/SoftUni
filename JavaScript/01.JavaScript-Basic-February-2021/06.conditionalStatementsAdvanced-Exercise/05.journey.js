function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let type;
    let total = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            total = budget * 0.3;
            type = "Camp";
        } else if (season == "winter") {
            total = budget * 0.7;
            type = "Hotel";
        }

    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            total = budget * 0.4;
            type = "Camp";
        } else if (season == "winter") {
            total = budget * 0.8;
            type = "Hotel";
        }

    } else if (budget > 1000) {
        total = budget * 0.9;
        destination = "Europe";
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${total.toFixed(2)}`);
}

journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);