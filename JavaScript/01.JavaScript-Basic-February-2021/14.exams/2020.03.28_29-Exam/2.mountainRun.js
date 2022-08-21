function mountainRun(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);

    let totalTime = distance * time;
    let addTime = Math.floor((distance / 50)) * 30;
    totalTime += addTime;

    let diff = totalTime - record;
    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }

}

mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);