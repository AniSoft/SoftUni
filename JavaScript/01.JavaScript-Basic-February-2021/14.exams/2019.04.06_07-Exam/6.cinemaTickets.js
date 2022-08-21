function cinemaTickets(input) {
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let totalTickets = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "End" || input[i] == "Finish") {
            break;
        }

        let movieTitle = input[i];
        i++;

        let freeSeats = Number(input[i]);
        i++;

        let currentMovieTickets = 0;
        while (input[i] != "End" && input[i] != "Finish") {            
            totalTickets += 1;
            currentMovieTickets += 1;
            switch (input[i]) {
                case "standard":
                    standardTickets += 1;
                    break;
                case "student":
                    studentTickets += 1;
                    break;
                case "kid":
                    kidsTickets += 1;
                    break;

                default:
                    break;
            }

            if (currentMovieTickets == freeSeats) {
                break;
            }

            i++;            
        }
        console.log(`${movieTitle} - ${(100 * currentMovieTickets / freeSeats).toFixed(2)}% full.`);
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(100 * studentTickets / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${(100 * standardTickets / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(100 * kidsTickets / totalTickets).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);


// cinemaTickets(["The Matrix",
//     "20",
//     "student",
//     "standard",
//     "kid",
//     "kid",
//     "student",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "The Green Mile",
//     "17",
//     "student",
//     "standard",
//     "standard",
//     "student",
//     "standard",
//     "student",
//     "End",
//     "Amadeus",
//     "3",
//     "standard",
//     "standard",
//     "standard",
//     "Finish"]);