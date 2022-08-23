function solve(input) {
    let energy = Number(input.shift());

    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End of battle") {
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
            break;
        }

        let distance = input[i];
        if (energy - distance < 0) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return;
        }

        energy -= distance;
        count++;

        if (count % 3 === 0) {
            energy += count;
        }
    }
}

solve([
    '100', '10', '10',
    '10', '1', '2',
    '3', '73', '10'
]);

solve(['200', '54', '14', '28', '13', 'End of battle']);