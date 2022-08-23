function daysWeeks(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (num < 1 || num > 7) {
        console.log("Invalid day!");
    } else {
        let index = num - 1;
        console.log(days[index]);
    }

}

daysWeeks(3);
daysWeeks(6);
daysWeeks(11);