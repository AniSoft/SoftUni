function calculator(input) {
    let name = input[0];
    let season = Number(input[1]);
    let seria = Number(input[2]);
    let time = Number(input[3]);

    let total = 0;
    let ads = time * 0.2;
    let extraTime = 10;

    total = season * ((seria) * (time + ads) + extraTime);

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(total)} minutes.`);
}

calculator(["Lucifer", "3", "18", "55"]);
calculator(["Game of Thrones", "7", "10", "50"]);
calculator(["Riverdale", "3", "21", "45"]);