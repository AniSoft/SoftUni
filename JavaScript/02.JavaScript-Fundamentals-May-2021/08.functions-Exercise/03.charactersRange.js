function characterRange(firstChar, secondChar) {
    let min = firstChar.charCodeAt(0);
    let max = secondChar.charCodeAt(0);

    let firstCharAsNumber = firstChar.charCodeAt(0);
    let secondCharAsNumber = secondChar.charCodeAt(0);

    if (firstCharAsNumber > secondCharAsNumber) {
        min = secondChar.charCodeAt(0);
        max = firstChar.charCodeAt(0);
    }

    let result = '';
    for (let i = min + 1; i < max; i++) {
        let character = String.fromCharCode(i);
        result += character + ' ';

    }

    return result;
}

let result = characterRange('a', 'd');
console.log(result);