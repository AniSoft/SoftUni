function movieStars(input) {
    let budget = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        if (input[i] == "ACTION") {
            break;
        }
        if (input[i].length > 15) {
            budget = budget - budget * 0.2;
        } else {
            i++;
            budget = budget - Number(input[i]);
        }

        if (budget <= 0) {
            break;
        }

    }
    if (budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(budget * -1).toFixed(2)} leva for our actors.`);
    }
}

movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"]);

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);