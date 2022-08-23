function solve(text) {
    let result = [];
    let currentWord = '';

    let lower = text.toLocaleLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i] != lower[i]) {
            if (currentWord.length > 0) {
                result.push(currentWord);
            }
            currentWord = text[i];
        } else {
            currentWord += text[i];
        }
    }

    if (currentWord.length > 0) {
        result.push(currentWord);
    }

    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');