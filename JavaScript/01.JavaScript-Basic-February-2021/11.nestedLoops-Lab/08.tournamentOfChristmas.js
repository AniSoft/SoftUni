function tournament(input) {
    let index = 0;
    let day = Number(input[index]);
    index++;

    let money = 0;
    let winCounter = 0;
    let loseCounter = 0;
    for (let i = 0; i < day; i++) {
        let command = input[index];
        index++;

        let tempMoney = 0;
        let tempWinCounter = 0;
        let tempLoseCounter = 0;

        while (command !== "Finish") {
            let name = command;
            let result = input[index];
            index++;

            if (result === "win") {
                tempMoney += 20;
                tempWinCounter++;
            } else {
                tempLoseCounter++;
            }

            command = input[index];
            index++;
        }

        if (tempWinCounter > tempLoseCounter) {
            tempMoney = tempMoney * 1.10;
            winCounter++;
        } else {
            loseCounter++;
        }
        money += tempMoney;
    }

    if (winCounter > loseCounter) {
        money = money * 1.20;
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}

tournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);


// tournament([
//     "3",
//     "darts",
//     "lose",
//     "handball",
//     "lose",
//     "judo",
//     "win",
//     "Finish",
//     "snooker",
//     "lose",
//     "swimming",
//     "lose",
//     "squash",
//     "lose",
//     "table tennis",
//     "win",
//     "Finish",
//     "volleyball",
//     "win",
//     "basketball",
//     "win",
//     "Finish"
// ]);