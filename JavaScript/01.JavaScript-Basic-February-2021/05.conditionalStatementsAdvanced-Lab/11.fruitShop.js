function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana":
                result = quantity * 2.5;
                break;
            case "apple":
                result = quantity * 1.2;
                break;
            case "orange":
                result = quantity * 0.85;
                break;
            case "grapefruit":
                result = quantity * 1.45;
                break;
            case "kiwi":
                result = quantity * 2.7;
                break;
            case "pineapple":
                result = quantity * 5.5;
                break;
            case "grapes":
                result = quantity * 3.85;
                break;

            default:
                console.log("error");
                return;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana":
                result = quantity * 2.7;
                break;
            case "apple":
                result = quantity * 1.25;
                break;
            case "orange":
                result = quantity * 0.90;
                break;
            case "grapefruit":
                result = quantity * 1.60;
                break;
            case "kiwi":
                result = quantity * 3;
                break;
            case "pineapple":
                result = quantity * 5.6;
                break;
            case "grapes":
                result = quantity * 4.20;
                break;

            default:
                console.log("error");
                return;
        }
    } else {
        console.log("error");
        return;
    }
    console.log(result.toFixed(2));
}

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);