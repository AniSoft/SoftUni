function movieDay(input){
    let time = Number(input[0]);
    let scene = Number(input[1]);
    let timeScene = Number(input[2]);

    let teren = time * 0.15;

    let total = 0;
    total = timeScene * scene + teren;

    let diff = time - total;
    if (time >= total) {
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.abs(diff).toFixed()} minutes.`);
    }
}

movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);