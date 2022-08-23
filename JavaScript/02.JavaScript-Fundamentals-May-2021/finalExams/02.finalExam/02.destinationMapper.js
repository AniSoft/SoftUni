// COOL
function solve(text) {
    let result = [];
    let points = 0;

    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;

    let match = pattern.exec(text);
    while (match != null) {
        result.push(match[2]);
        points += match[2].length;

        match = pattern.exec(text);
    }

    console.log(`Destinations: ` + result.join(', '));
    console.log(`Travel Points: ` + points);
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=]');