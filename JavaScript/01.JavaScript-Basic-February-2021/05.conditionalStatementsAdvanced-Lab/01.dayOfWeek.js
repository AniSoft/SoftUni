function dayWeek(input) {
    let num = Number(input[0]);

    switch (num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;            
    }
}

dayWeek(["1"]);
dayWeek(["2"]);
dayWeek(["3"]);
dayWeek(["4"]);
dayWeek(["5"]);
dayWeek(["6"]);
dayWeek(["7"]);
dayWeek(["8"]);