function solve(input) {
    let result = input.shift();

    let actions = {
        'Add Stop': add,  // ()=>{}
        'Remove Stop': remove,
        'Switch': swap,
    };

    while (input[0] != 'Travel') {
        let tokens = input.shift().split(':');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2]);

        console.log(result);
    }

    console.log(`Ready for world tour! Planned stops: ${result}`);

    function add(index, string) {
        index = Number(index);
        if (validate(index)) {
            let left = result.substring(0, index);
            let right = result.substring(index);
            result = left + string + right;
        }
    }

    function remove(start, end) {
        start = Number(start);
        end = Number(end);
        if (validate(start) && validate(end)) {
            let left = result.substring(0, start);
            let right = result.substring(end + 1);
            result = left + right;
        }
    }

    function swap(oldString, newString) {
        let pattern = new RegExp(oldString, 'g');
        result = result.replace(pattern, newString);
    }

    function validate(index) {
        return (index >= 0) && (index < result.length);
    }
}

solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);