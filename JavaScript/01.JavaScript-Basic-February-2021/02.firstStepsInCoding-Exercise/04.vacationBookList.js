function bookList(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let readBookHours = totalPages / pagesPerHour;
    let hoursPerDay = readBookHours / days;

    console.log(hoursPerDay);

}

bookList(["212", "20", "2"]);