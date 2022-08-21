function tradeCommission(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let result = 0;

    if (sales<0){
        console.log("error");
        return;
    }

    switch (city) {
        case "Sofia":
            if (sales <= 500 && sales >= 0) {
                result = sales * 0.05;
            } else if (sales <= 1000) {
                result = sales * 0.07;
            } else if (sales <= 10000) {
                result = sales * 0.08
            } else {
                result = sales * 0.12;
            }
            break;

        case "Varna":
            if (sales <= 500 && sales >= 0) {
                result = sales * 0.045;
            } else if (sales <= 1000) {
                result = sales * 0.075;
            } else if (sales <= 10000) {
                result = sales * 0.1
            } else {
                result = sales * 0.13;
            }
            break;

        case "Plovdiv":
            if (sales <= 500 && sales >= 0) {
                result = sales * 0.055;
            } else if (sales <= 1000) {
                result = sales * 0.08;
            } else if (sales <= 10000) {
                result = sales * 0.12;
            } else {
                result = sales * 0.145;
            }
            break;

        default:
            console.log("error");
            return;  // Exit from function
    }
    console.log(result.toFixed(2));
}

tradeCommission(["Sofia", "1500"]);
tradeCommission(["Plovdiv", "499.99"]);
tradeCommission(["Varna", "3874.50"]);
tradeCommission(["Kaspichan", "-50"]);