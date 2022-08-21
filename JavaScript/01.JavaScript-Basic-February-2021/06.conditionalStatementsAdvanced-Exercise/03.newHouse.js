function newHouse(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let money = 0;
    switch (type) {
        case "Roses":
            money = count * 5;
            if (count > 80) {
                money = money * 0.9;
            }
            break;

        case "Dahlias":
            money = count * 3.8;
            if (count > 90) {
                money = money * 0.85;
            }
            break;

        case "Tulips":
            money = count * 2.8;
            if (count > 80) {
                money = money * 0.85;
            }
            break;

        case "Narcissus":
            money = count * 3;
            if (count < 120) {
                money = money * 1.15;
            }
            break;

        case "Gladiolus":
            money = count * 2.5;
            if (count < 80) {
                money = money * 1.2;
            }
            break;

        default:
            break;
    }

    if (budget >= money) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - money).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(money - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);