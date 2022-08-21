function lunchBreak(input) {
    let name = input[0];
    let timeMovie = Number(input[1]);
    let timeRest = Number(input[2]);

    let timeLunch=timeRest/8;
    let timeChill=timeRest/4;

    let total=0;
    total=timeLunch+timeChill;

    let diff=timeRest-total-timeMovie;

    if(diff>=0){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff*-1)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);