function shoppingList(input) {
    let groceries = input.shift().split('!');

    let line = input.shift();
    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');

        if (command == "Urgent") {
            if (groceries.includes(item) == false) {
                groceries.unshift(item);
            }
        } else if (command == 'Unnecessary') {
            if (groceries.includes(item) == true) {
                let index = groceries.indexOf(item);
                groceries.splice(index, 1);
            }
        } else if (command == 'Correct') {
            if (groceries.includes(item) == true) {
                let index = groceries.indexOf(item);
                groceries[index] = newItem;
            }
        } else if (command == 'Rearrange') {
            if (groceries.includes(item) == true) {
                let index = groceries.indexOf(item);
                groceries.splice(index, 1);
                groceries.push(item);
            }
        }

        line = input.shift();
    }

    console.log(groceries.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);