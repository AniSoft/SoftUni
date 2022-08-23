function shoppingList(input) {
    let groceries = input.shift().split('!');

    let line = input.shift();
    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');
        switch (command) {
            case 'Urgent':
                urgent(groceries, item);
                break;
            case 'Unnecessary':
                unnecessary(groceries, item);
                break;
            case 'Correct':
                correct(groceries, item, newItem);
                break;
            case 'Rearrange':
                rearrange(groceries, item);
                break;
            default:
                break;
        }

        line = input.shift();
    }

    console.log(groceries.join(', '));

    function urgent(list, item) {
        if (list.includes(item) == false) {
            list.unshift(item);
        }
    }

    function unnecessary(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    function correct(list, item, newItem) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list[index] = newItem;
        }
    }

    function rearrange(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);