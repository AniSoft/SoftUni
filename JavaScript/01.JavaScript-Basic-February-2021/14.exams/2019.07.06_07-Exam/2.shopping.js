function shopping(input) {
    let budget = Number(input[0]);
    let video = Number(input[1]);
    let procesor = Number(input[2]);
    let ram = Number(input[3]);

    let videoPrice = 250;
    let procesorPrice = 0.35 * (videoPrice * video);
    let ramPrice = 0.1 * (videoPrice * video);

    let discount = 0;
    let total = 0;
    if (video > procesor) {
        discount = 0.15;
    }

    total = (video * videoPrice + procesor * procesorPrice + ram * ramPrice) * (1 - discount);

    let diff = budget - total;
    if (budget >= total) {
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(Math.abs(diff)).toFixed(2)} leva more!`);
    }

}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);