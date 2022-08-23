function solve(text) {
    let output = [];
    let pattern = /\b(?<day>\d{2})(?<separator>[.\-\/])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;
    while (validDate = pattern.exec(text)) {
        output.push({ day: validDate.groups['day'], month: validDate.groups['month'], year: validDate.groups['year'] });
    }

    for (const date of output) {
        console.log(`Day: ${date.day}, Month: ${date.month}, Year: ${date.year}`);
    }
}

solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");