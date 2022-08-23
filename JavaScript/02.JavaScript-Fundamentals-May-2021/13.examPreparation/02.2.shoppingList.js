function shoppingList(input) {
    let groceries = input.shift().split('!');

    let line = input.shift();
    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');

        urgent(command, groceries, item);
        unnecessary(command, groceries, item);
        correct(command, groceries, item, newItem);
        rearrange(command, groceries, item);

        line = input.shift();
    }

    console.log(groceries.join(', '));

    function urgent(command, list, item) {
        if (command == "Urgent") {
            if (list.includes(item) == false) {
                list.unshift(item);
            }
        }
    }

    function unnecessary(command, list, item) {
        if (command == 'Unnecessary') {
            if (list.includes(item) == true) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            }
        }
    }

    function correct(command, list, item, newItem) {
        if (command == 'Correct') {
            if (list.includes(item) == true) {
                let index = list.indexOf(item);
                list[index] = newItem;
            }
        }
    }

    function rearrange(command, list, item) {
        if (command == 'Rearrange') {
            if (list.includes(item) == true) {
                let index = list.indexOf(item);
                list.splice(index, 1);
                list.push(item);
            }
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);