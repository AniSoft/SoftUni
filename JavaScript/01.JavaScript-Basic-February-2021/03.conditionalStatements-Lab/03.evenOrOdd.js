function everOrOdd(input) {
    let num = Number(input[0]);

    if (num % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

everOrOdd(["2"]);
everOrOdd(["3"]);
everOrOdd(["25"]);
everOrOdd(["1024"]);
