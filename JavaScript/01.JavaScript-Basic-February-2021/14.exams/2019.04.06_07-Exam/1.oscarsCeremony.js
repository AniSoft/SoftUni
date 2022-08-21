function oscar(input) {
    let rent = Number(input[0]);

    let reward = rent * 0.7;
    let food = reward * 0.85;
    let sound = food * 0.5;

    let total = 0;
    total = reward + food + sound + rent;

    console.log(`${total.toFixed(2)}`);
}

oscar(["3500"]);
oscar(["5555"]);