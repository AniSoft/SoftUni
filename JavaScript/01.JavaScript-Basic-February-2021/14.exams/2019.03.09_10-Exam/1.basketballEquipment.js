function basketball(input) {
    let tax = Number(input[0]);

    let shouse = tax * 0.6;
    let team = shouse * 0.8;
    let ball = team * 0.25;
    let other = ball * 0.2;

    let total = 0;
    total = tax + shouse + team + ball + other;

    console.log(`${total.toFixed(2)}`);
}

basketball(["320"]);
basketball(["550"]);