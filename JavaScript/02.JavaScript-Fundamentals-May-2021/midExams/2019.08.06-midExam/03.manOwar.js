function solve(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = +input.shift();

    for (let line of input) {
        if (line === "Retire") {
            break;
        }

        let tokens = line.split(" ");
        let command = tokens.shift();
        switch (command) {
            case "Fire":
                let ind = +tokens[0];
                let damage = +tokens[1];
                if (ind < 0 || ind >= warShip.length) {
                    break;
                }
                warShip[ind] -= damage;
                if (warShip[ind] <= 0) {
                    return `You won! The enemy ship has sunken.`;
                }

                break;
            case "Defend":
                let start = +tokens[0];
                let end = +tokens[1];
                let dam = +tokens[2];
                if (start < 0 || start >= pirateShip.lenght || end < 0 || end >= pirateShip.length) {
                    break;
                }

                for (let i = start; i <= end; i++) {
                    pirateShip[i] -= dam;
                    if (pirateShip[i] <= 0) {
                        return `You lost! The pirate ship has sunken.`;
                    }
                }
                break;

            case "Repair":
                let ind2 = +tokens[0];
                let health = +tokens[1];
                if (ind2 < 0 || ind2 >= pirateShip.lenght) {
                    break;
                }

                let curHealth = pirateShip[ind2] + health;
                if (curHealth > maxHealth) {
                    curHealth = maxHealth;
                }

                pirateShip[ind2] = curHealth;
                break;

            case "Status":
                let count = 0;
                pirateShip.forEach(section => {
                    if (section < maxHealth * 0.2) {
                        count++;
                    }
                });

                console.log(`${count} sections need repair.`);
                break;

            default:
                break;
        }
    }

    let pirateShipSum = pirateShip.reduce((acc, curr) => acc + curr, 0);
    let warshipSum = warShip.reduce((a, b) => a + b);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}


solve([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]);


// solve([
//     '2>3>4>5>2',
//     '6>7>8>9>10>11',
//     '20',
//     'Status',
//     'Fire 2 3',
//     'Defend 0 4 11',
//     'Repair 3 18',
//     'Retire'
// ]);