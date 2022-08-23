function solve(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let first = input.shift();
    let sec = input.shift();
    let word = input.shift();
    let con = first + sec;
    let start = 0;
    let output = '';

    for (const char of con) {
        if (vowels.includes(char)) {
            if (start == word.length) {
                start = 0;
            }
            output += word[start].toUpperCase();
            start++;
        } else {
            output += char;
        }
    }
    console.log(`Your generated password is ${output.split('').reverse().join('')}`)
}

solve([
    'ilovepizza',
    'ihatevegetables',
    'orange']
)