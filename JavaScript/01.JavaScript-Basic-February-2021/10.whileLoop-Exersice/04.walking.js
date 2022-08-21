function walking(input) {
    let steps = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (steps <= 10000) {
        if (command === "Going home") {
            steps += Number(input[index]);
            index++;
            break;
        }

        let tempStep = Number(command);
        steps += tempStep;

        command = input[index];
        index++
    }

    if (steps >= 10000) {
        let diff = steps - 10000;
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`)
    } else {
        let diff = 10000 - steps;
        console.log(`${diff} more steps to reach goal.`)
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);