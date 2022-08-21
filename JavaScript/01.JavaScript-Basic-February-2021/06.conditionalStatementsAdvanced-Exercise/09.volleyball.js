function volleyball(input) {
    let yearType = input[0];
    let holidays = Number(input[1]);
    let weekendsAtHome = Number(input[2]);

    let saturdayGames = (48 - weekendsAtHome) * (3/4);
    let sundayGames = weekendsAtHome;
    let holidayGames = holidays * (2/3);
    let totalGames = saturdayGames + sundayGames + holidayGames;

    if (yearType === "leap") {
        totalGames += totalGames *  0.15;
    }

    console.log(Math.floor(totalGames));
}

volleyball(["leap", "5", "2"]);
volleyball(["normal", "3", "2"]);
volleyball(["leap", "2", "3"]);
volleyball(["normal", "11", "6"]);
volleyball(["leap", "0", "1"]);
volleyball(["normal", "6", "13"]);