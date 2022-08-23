// Variant 1
function solve(text) {
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}

// Variant 2
function solve(string) {
    for (let ch of string) {
        console.log(ch);
    }
}

solve('AWord');