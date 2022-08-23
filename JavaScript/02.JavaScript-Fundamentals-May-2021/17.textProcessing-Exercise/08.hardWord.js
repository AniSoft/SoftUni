function solve(input) {
    let text = input.shift();
    let words = input.shift();

    for (const char of text) {
        if (char === '_') {
            let replaceCount = 0;
            let forReplace = '';
            let index = text.indexOf(char);
            for (let i = index; i < text.length; i++) {
                if (text[i] != '_') {
                    break;
                }
                forReplace += '_';
                replaceCount++;
            }
            for (const word of words) {
                if (word.length === replaceCount) {
                    text = text.replace(forReplace, word);
                }
            }
        }
    }
    console.log(text)
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])