function skeleton(input) {
    let minute = Number(input[0]);
    let second = Number(input[1]);
    let length = Number(input[2]);
    let secondFor100 = Number(input[3]);

    let record = second + minute * 60;

    let time = (length / 100) * secondFor100 - (length / 120) * 2.5;

    if (time <= record) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${time.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(time - record).toFixed(3)} second slower.`);
    }
}

skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);