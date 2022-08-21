function jump(input) {
    let target = Number(input[0]);
    let startingHeigth = target - 30;

    let failCount = 0;
    let jumpsCount = 0;
    let successfulSession = false;
    for (let i = 1; i < input.length; i++) {
        let currentJump = Number(input[i]);
        jumpsCount += 1;
        if (currentJump > startingHeigth) {
            if (startingHeigth >= target) {
                console.log(`Tihomir succeeded, he jumped over ${startingHeigth}cm after ${jumpsCount} jumps.`);
                successfulSession = true;
                break;
            }

            startingHeigth += 5;
            failCount = 0;
        } else {
            failCount += 1;
        }

        if (failCount == 3) {
            console.log(`Tihomir failed at ${startingHeigth}cm after ${jumpsCount} jumps.`);
            break;
        }
    }

    if (!successfulSession && failCount != 3) {
        console.log(`Tihomir failed at ${startingHeigth}cm after ${jumpsCount} jumps.`);
    }
}

jump(["231", "205", "212", "213", "228", "229", "230", "235"]);
jump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);