function cinemaTicket(input) {
    let day = input[0];

    if (day == "Monday" || day == "Tuesday" || day == "Friday") {
        console.log("12");
    } else if (day == "Wednesday" || day == "Thursday") {
        console.log("14");
    } else if (day == "Saturday" || day == "Sunday") {
        console.log("16");
    }
}

cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);