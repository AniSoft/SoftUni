function series(input) {
    let budget = Number(input[0]);

    for (let i = 2; i < input.length; i++) {
        let seriesName = input[i];
        i++;
        let price = Number(input[i]);

        switch (seriesName) {
            case "Thrones":
                price = price-price * 0.5;
                break;
            case "Lucifer":
                price = price-price * 0.4;
                break;
            case "Protector":
                price = price-price * 0.3;
                break;
            case "TotalDrama":
                price = price-price * 0.2;
                break;
            case "Area":
                price = price-price * 0.1;
                break;

            default:
                break;
        }
        budget -= price;
    }

    if (budget >= 0) {
        console.log(`You bought all the series and left with ${(budget).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(budget * -1).toFixed(2)} lv. more to buy the series!`);
    }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series(["25", "6", "TeenWolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]);