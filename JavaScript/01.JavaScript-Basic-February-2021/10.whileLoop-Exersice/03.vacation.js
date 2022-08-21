function vacation(input) {
    let index = 0;

    let needMoney = Number(input[index]);
    index++;

    let money = Number(input[index]);
    index++;

    let counter = 0;
    let dayCounter = 0;
    let isSaveMoney = true;
    while (money < needMoney) {
        dayCounter++;
        let action = input[index];
        index++;

        let tempMoney = Number(input[index]);
        index++;

        if (action === "save") {
            money += tempMoney;
            counter = 0;
        } else {
            money -= tempMoney;
            if (money < 0) {
                money = 0;
            }
            counter++;
        }

        if (counter === 5) {
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            isSaveMoney = false;
            break;
        }
    }

    if (isSaveMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);