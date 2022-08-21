function godzilla(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothing = Number(input[2]);

    let decor = budget * 0.10;

    if (extras > 150) {
        clothing = clothing * 0.90;
    }

    let moneyClothing = clothing * extras;
    let totalMoney = moneyClothing + decor;

    let diff = Math.abs(totalMoney - budget)
    if (totalMoney <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }

}


godzilla(["20000", "120", "55.5"]);
godzilla(["15437.62", "186", "57.99"]);
godzilla(["9587.88", "222", "55.68"]);












