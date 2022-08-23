function solve(input) {
    let targets = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End") {
            break;
        }

        let tokens = input[i].split(" ");
        let command = tokens[0];

        if (command === "Shoot") {
            let idx = Number(tokens[1]);
            let power = Number(tokens[2]);

            if (0 <= idx && idx < targets.length) {
                targets[idx] -= power;
            } else {
                continue;
            }

            if (targets[idx] <= 0) {
                targets.splice(idx, 1)
            }

        } else if (command === "Add") {
            let idx = Number(tokens[1]);
            let value = Number(tokens[2]);

            if (0 <= idx && idx < targets.length) {
                targets.splice(idx, 0, value); //??
            } else {
                console.log(`Invalid placement!`);
            }

        } else if (command === "Strike") {
            let idx = Number(tokens[1]);
            let radius = Number(tokens[2]);

            if (0 <= idx < targets.length && 0 <= idx - radius && idx + radius <= targets.length) {
                targets.splice(idx - radius, 1 + 2 * radius);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }

    console.log(targets.join("|"));
}

solve([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]);

//solve(['1 2 3 4 5', 'Strike 0 1', 'End']);