function powerofTwo(input) {
    num = Number(input);
    for (let i = 0; i <= num; i += 2) {        
        console.log(Math.pow(2, i));
    }
}

powerofTwo(["7"]);