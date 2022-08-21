function guests(input) {
    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let cakePrice = 4;
    let eggPrice = 0.45;

    let cake = Math.ceil((guests / 3));
    let eggs = 2 * guests;

    let total = 0;
    total = cake * cakePrice + eggs * eggPrice;

    let diff = budget - total;
    if (diff >= 0) {
        console.log(`Lyubo bought ${cake} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${Math.abs(diff).toFixed(2)} lv. more.`);
    }
}

guests(["10", "35"]);
guests(["9", "12"]);