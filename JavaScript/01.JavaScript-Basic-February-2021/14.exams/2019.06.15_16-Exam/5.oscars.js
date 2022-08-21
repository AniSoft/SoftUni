function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let juri = Number(input[2]);

    index = 3;
    let total = points;
    let score = 0;
    for (let i = 1; i <= juri; i++) {
        let juriName = input[index]
        index++;
        let juriPoints = Number(input[index]);
        index++;

        score = Number(juriName.length) * juriPoints / 2;
        total += score;

        if (total >= 1250.5) {
            break;
        }
    }

    let diff = 1250.5 - total;
    if (total >= 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${total.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]);