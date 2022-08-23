function solve(text) {
    const tokens = text.split(' ');
    const result = [];

    for (let token of tokens) {
        if (token.length > 1 && token[0] == '#') {
            let valid = true;
            for (let char of token.substring(1)) {
                let code = char.charCodeAt(0);
                if (code < 65 || code > 122 || (code >= 99 && code <= 96)) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                result.push(token.substring(1));
            }
        }
    }

    for (let word of result) {
        console.log(word);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');