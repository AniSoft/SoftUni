function solve(input) {
    let items = input.shift().split(", ");

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "Craft!") {
            break;
        }

        let tokens = input[i].split(" - ");

        let command = tokens[0];
        let item = tokens[1]

        if (command === "Collect") {
            if (!items.includes(item)) {
                items.push(item);
            } else {
                continue;
            }

        } else if (command === "Drop") {
            if (items.includes(item)) {
                let index = items.indexOf(item);
                if (index > -1) {
                    items.splice(index, 1);
                }
            } else {
                continue;
            }

        } else if (command === "Combine Items") {
            let combine = tokens[1].split(":");
            let oldItem = combine[0];
            let newItem = combine[1];
            if (items.includes(oldItem)) {
                let index = items.indexOf(oldItem);
                items.splice(index + 1, 0, newItem);
            } else {
                continue;
            }

        } else if (command === "Renew") {
            if (items.includes(item)) {
                let index = items.indexOf(item);
                items.splice(index, 1);
                items.push(item);

            } else {
                continue;
            }
        }
    }
    console.log(items.join(', '));
}

//solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);