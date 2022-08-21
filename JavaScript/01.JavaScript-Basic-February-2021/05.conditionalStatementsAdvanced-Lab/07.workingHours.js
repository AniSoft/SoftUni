function workingDay(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if ((hour >= 10 && hour <= 18) && day != "Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}

workingDay(["11", "Monday"]);
workingDay(["19", "Friday"]);
workingDay(["11", "Sunday"]);