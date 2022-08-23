// Variant 1
function solve(text, word) {
    word = ` ${word} `;
    text = ` ${text} `;

    let count = 0;
    let index = 0;

    let found = text.indexOf(word);

    while (found != -1) {
        count++;
        index = found + 1;
        found = text.indexOf(word, index);
    }

    console.log(count);
}


// Variant 2
function solve(text, word) {
    console.log(text.split(' ').filter(x => x == word).length);
}

solve("This is a word and it also is a sentence", "is");