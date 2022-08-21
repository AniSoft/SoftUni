function balls(input) {
    let balls = Number(input[0]);

    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let otherCount = 0;

    let total = 0;
    for (let i = 1; i < balls + 1; i++) {
        let index = i;
        ball = input[index];
        index++;

        switch (ball) {
            case "red":
                total += 5;
                redCount++;
                break;

            case "orange":
                total += 10;
                orangeCount++;
                break;

            case "yellow":
                total += 15;
                yellowCount++;
                break;

            case "white":
                total += 20;
                whiteCount++;
                break;

            case "black":
                total = total / 2;
                blackCount++;
                break;

            default:
                otherCount++;
                break;
        }
    }

    console.log(`Total points: ${total}`);
    console.log(`Points from red balls: ${redCount}`);
    console.log(`Points from orange balls: ${orangeCount}`);
    console.log(`Points from yellow balls: ${yellowCount}`);
    console.log(`Points from white balls: ${whiteCount}`);
    console.log(`Other colors picked: ${otherCount}`);
    console.log(`Divides from black balls: ${blackCount}`);

}

balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);