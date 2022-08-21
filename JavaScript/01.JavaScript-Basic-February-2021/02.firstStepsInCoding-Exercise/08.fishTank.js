function fishTank(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = a * b * h;
    let totalLiters = volume * 0.001;
    let realLiters = totalLiters * (1 - percentage * 0.01)

    console.log(realLiters);
}

fishTank(["85", "75", "47", "17"]);