function nationalCourt(input) {
    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);
    let people = Number(input[3]);

    let efficiency = e1 + e2 + e3;

    let hour = 0;
    while (people > 0) {
        hour++;
        if (hour % 4 != 0) {
            people -= efficiency;
        }
    }

    console.log(`Time needed: ${hour}h.`);
}

nationalCourt(["5", "6", "4", "20"]);