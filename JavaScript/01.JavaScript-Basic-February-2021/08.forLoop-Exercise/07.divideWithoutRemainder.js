function devideRemainder(input) {
    let n = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if (num % 2 === 0) {
            p1Count++;
        }

        if (num % 3 === 0) {
            p2Count++;
        }

        if (num % 4 === 0) {
            p3Count++;
        }

    }

    console.log((p1Count / n * 100).toFixed(2) + "%");
    console.log((p2Count / n * 100).toFixed(2) + "%");
    console.log((p3Count / n * 100).toFixed(2) + "%");
}

devideRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
devideRemainder(["3", "3", "6", "9"]);