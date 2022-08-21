function touristShop(input) {
    index = 0
    let budget = input[index];
    index++;

    let command = input[index];
    index++

    let total = 0;
    let count = 0;
    while (command != "Stop") {
        if (total > budget) {
            break;
        }

        let name = command;
        let price = Number(input[index]);
        index++;
        count++;

        if (count % 3 == 0) {
            price = price * 0.5;
        }
        total += price;

        command = input[index];
        index++
    }

    if (command == "Stop") {
        console.log(`You bought ${count} products for ${total.toFixed(2)} leva.`);
    }

    if (total > budget) {
        console.log(`You don't have enough money!`);
        console.log(`You need ${(total - budget).toFixed(2)} leva!`);
    }
}

touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);
touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);