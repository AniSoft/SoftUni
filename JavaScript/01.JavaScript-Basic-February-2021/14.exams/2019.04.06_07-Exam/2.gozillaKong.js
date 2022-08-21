function gozila(input) {
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = budget * 0.1;

    let allClothes = statist * clothes;
    if (statist > 150) {
        allClothes = allClothes * 0.9;
    }

    let total = 0;
    total = decor + allClothes;

    if (total > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(Math.abs(total - budget)).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}

gozila(["20000", "120", "55.5"]);
gozila(["15437.62", "186", "57.99"]);
gozila(["9587.88", "222", "55.68"]);