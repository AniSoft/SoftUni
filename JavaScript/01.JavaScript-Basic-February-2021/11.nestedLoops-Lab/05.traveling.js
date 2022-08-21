function traveling(input) {
    let currentDestination = "";
    let destinationPrice = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "End") {
            break;
        }
        currentDestination = input[i++];
        destinationPrice = Number(input[i]);
        let totalSavings = 0;
        while (totalSavings < destinationPrice) {
            i++;
            totalSavings += Number(input[i]);
        }
        console.log(`Going to ${currentDestination}!`);

    }
}


traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);


traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
