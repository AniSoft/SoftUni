function exam(input) {
    let AllowBadCount = Number(input[0]);
    let index = 1;
    let total = 0;
    let badCount = 0;
    let totalScore = 0;
    let lastProblem = "";
    let isBad = false;

    let name = input[index++];
    let score = Number(input[index++]);
    while (name !== "Enough") {
        if (name === "Enough") {
            break;
        }

        lastProblem = name;
        totalScore++;
        total += score

        if (score <= 4) {
            badCount++;
        }

        if (badCount >= AllowBadCount) {
            isBad = true;
            break;
        }

        name = input[index++];
        score = Number(input[index++]);

    }

    if (isBad) {
        console.log(`You need a break, ${badCount} poor grades.`);
    } else {
        console.log(`Average score: ${(total / totalScore).toFixed(2)}`);
        console.log(`Number of problems: ${totalScore}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

exam(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
//exam(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);