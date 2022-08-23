// 80/100
function solve(input) {
    let loot = input.shift().split("|");

    for (let line of input) {
        if (line === "Yohoho!") {
            break;
        }

        let tokens = line.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Loot":
                for (let item of tokens) {
                    if (loot.indexOf(item) === -1) {  // if is -1 -> no such element
                        loot.unshift(item)   // Add item otpred
                    }
                }
                break;

            case "Drop":
                let ind = Number(tokens[0]);
                if (ind < 0 || ind >= loot.length) {
                    break;
                }

                let el = loot.splice(ind, 1)[0];
                loot.push(el);
                break;

            case "Steal":
                let count = Number(tokens[0]);
                let ind2 = loot.length - count;
                if (count > loot.length) {
                    ind2 = 0;
                }

                let stolen = loot.splice(ind2, count);
                console.log(stolen.join(", "));
                break;

            default:
                break;
        }
    }

    if (loot.length === 0) {
        console.log(`Failed treasure hunt.`);
    }

    let sum = 0;
    for (let i = 0; i < loot.length; i++) {
        sum += loot[i].length;

    }
    let averageGain = sum / loot.length;
    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
}


solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]
);

// solve([
//     'Diamonds|Silver|Shotgun|Gold',
//     'Loot Silver Medals Coal',
//     'Drop -1',
//     'Drop 1',
//     'Steal 6',
//     'Yohoho!'
//   ]
//   );



