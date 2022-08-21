function party(input) {
    let guests = Number(input[0]);
    let tax = Number(input[1]);
    let budget = Number(input[2]);

    let cake = budget * 0.10;
    let discount = 0;
    let total = 0;
    if (guests >= 10 && guests <= 15) {
        discount = 0.15;
    } else if (guests > 15 && guests <= 20) {
        discount = 0.20;
    } else if (guests > 20) {
        discount = 0.25
    }

    total = guests * tax * (1 - discount) + cake;
    diff = budget - total;

    if (diff >= 0) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(Math.abs(diff)).toFixed(2)} leva needed.`);
    }
}

party(["18", "30", "450"]);
party(["8", "25", "340"]);
party(["24", "35", "550"]);