function solve(input) {
    let words = new Map();

    for (const word of input) {
        let value = 0;
        if (words.has(word)) {
            value = words.get(word)
        }
        value++;
        words.set(word, value);
    }

    let sorted = Array.from(words.entries()).sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        }
        else if (a[1] < b[1]) {
            return 1;
        }
        return 0;
    })
    
    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }
}

solve(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the",
    "third", "sentence"
])