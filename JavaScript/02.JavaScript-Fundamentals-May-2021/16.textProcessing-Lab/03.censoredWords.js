// Variant 1
function solve(text, word) {
    let found = text.includes(word);
    while (found) {
        text = text.replace(word, "*".repeat(word.length));
        found = text.includes(word);
    }

    console.log(text);
}


// Variant 2
function solve(text, word) {
    const tokens = text.split(word);
    console.log(tokens.join('*'.repeat(word.length)));
}

solve("A small sentence with some words", "small");