function combination(input) {
    let a = Number(input[0]);

    let combination = 0;
    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= a; j++) {
            for (let k = 0; k <= a; k++) {
                if (i + j + k == a) {
                    combination++;
                }

            }
        }
    }
    console.log(combination);
}

combination(["25"]);
combination(["20"]);
combination(["5"]);