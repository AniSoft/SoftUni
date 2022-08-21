function metricConverter(input) {
    let distance = Number(input[0]);
    let fromDim = input[1];
    let toDim = input[2];

    let result;

    if (fromDim === "m") {
        if (toDim === "cm") {
            result = distance * 100;
        } else if (toDim === "mm") {
            result = distance * 1000;
        }
    } else if (fromDim === "cm") {
        if (toDim === "m") {
            result = distance / 100;
        } else if (toDim === "mm") {
            result = distance * 10;
        }
    } else if (fromDim === "mm") {
        if (toDim === "m") {
            result = distance / 1000;
        } else if (toDim === "cm") {
            result = distance / 10;
        }
    }
    console.log(result.toFixed(3));
} 

metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"]);