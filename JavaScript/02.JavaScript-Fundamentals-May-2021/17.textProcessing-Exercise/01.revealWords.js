// Variant 1
function solve(words, text) {
    text = ` ${text} `;

    words = words.split(', ');

    for (let word of words) {
        let match = ` ${'*'.repeat(word.length)} `;
        word = ` ${word} `;

        text = text.replace(match, word);
    }

    console.log(text.trim());
}

// Variant 2
function solve(words, text) {
    words = words.split(', ');

    let textArray = text.split(' ');
    let result = [];

    for (let token of textArray) {
        let replaced = false;
        for (let word of words) {
            if (token == '*'.repeat(word.length)) {
                result.push(word);
                replaced = true;
            }
        }

        if (replaced == false) {
            result.push(token);
        }
    }

    console.log(result.join(' '));

}


solve('great', 'softuni is ***** place for learning new programming languages');