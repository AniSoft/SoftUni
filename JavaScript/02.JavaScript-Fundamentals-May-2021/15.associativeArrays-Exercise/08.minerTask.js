function solve(input) {
    let resources = new Map();
    for (let i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            let value = Number(input[i]);
            if (resources.has(input[i - 1])) {
                value += resources.get(input[i - 1]);
            }
            resources.set(input[i - 1], value);
        }
    }
    for (const [key, value] of resources) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Gold', '155', 'Silver', '10', 'Copper', '17', 'Gold', '155',]);