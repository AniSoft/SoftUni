function leapYears(input) {
    let startYear = Number(input[0]);
    let endYear = Number(input[1]);

    for (let i = startYear; i <= endYear; i += 4) {
        console.log(i);
    }
}

leapYears(["1908", "1919"]);
// leapYears(["2000","2011"]);
// leapYears(["1584","1597"]);
// leapYears(["1908","1919"]);
// leapYears(["2000","2011"]);
// leapYears(["1584","1597"]);
// leapYears(["2020","2032"]);	