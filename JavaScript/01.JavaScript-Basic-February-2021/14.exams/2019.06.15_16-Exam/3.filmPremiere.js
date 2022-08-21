function filmPremiere(input) {
    let name = input[0];
    let packet = input[1];
    let tickets = Number(input[2]);

    let price = 0;
    let discount = 0;
    switch (name) {
        case "John Wick":
            switch (packet) {
                case "Drink":
                    price = 12;
                    break;
                case "Popcorn":
                    price = 15;
                    break;
                case "Menu":
                    price = 19;
                    break;
                default:
                    break;
            }
            break;
        case "Star Wars":
            switch (packet) {
                case "Drink":
                    price = 18;
                    break;
                case "Popcorn":
                    price = 25;
                    break;
                case "Menu":
                    price = 30;
                    break;
                default:
                    break;
            }
            break;
        case "Jumanji":
            switch (packet) {
                case "Drink":
                    price = 9;
                    break;
                case "Popcorn":
                    price = 11;
                    break;
                case "Menu":
                    price = 14;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    if (name == "Star Wars" && tickets >= 4) {
        discount = 0.3;
    } else if (name == "Jumanji" && tickets == 2) {
        discount = 0.15;
    }

    total = price * tickets * (1 - discount)

    console.log(`Your bill is ${total.toFixed(2)} leva.`);

}

filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"]);