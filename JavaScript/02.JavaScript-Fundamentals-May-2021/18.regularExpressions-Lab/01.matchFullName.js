// Variant 2
function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [];

    let match = pattern.exec(input);

    while (match != null) {
        result.push(match[0]);

        match = pattern.exec(input);
    }

    console.log(result.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");

// Variant 2
function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    //let result = [...input.matchAll(pattern)].map(m => m[0]);
    let result = input.match(pattern);

    console.log(result.join(' '));
}