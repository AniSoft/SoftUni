function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let other = Number(input[3]);

    let total = 0;
    if (nights > 7) {
        nightPrice = nightPrice * 0.95;
    }

    total = nights * nightPrice + budget * other / 100

    let diff = budget - total;
    if (budget >= total) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(Math.abs(diff)).toFixed(2)} leva needed.`);
    }
}

familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);