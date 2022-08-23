function solve(input) {
    let actions = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': changeKey
    };

    let catalog = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input.shift().split('|');
        catalog[name] = {
            composer,
            key
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];

        let action = actions[command];
        action(name, tokens[2], tokens[3]);
    }

    let sorted = Object.entries(catalog).sort(comparePieces);

    for (let [name, piece] of sorted) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }

    function comparePieces(a, b) {
        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    }

    function add(name, composer, key) {
        if (catalog[name] != undefined) {
            console.log(`${name} is already in the collection!`);
        } else {
            catalog[name] = {
                composer,
                key
            };
            console.log(`${name} by ${composer} in ${key} added to the collection!`);
        }
    }

    function remove(name) {
        if (catalog[name] == undefined) {
            console.log(`Invalid operation! ${name} does not exist in the collection.`);
        } else {
            delete catalog[name];
            console.log(`Successfully removed ${name}!`);
        }
    }

    function changeKey(name, newKey) {
        if (catalog[name] == undefined) {
            console.log(`Invalid operation! ${name} does not exist in the collection.`);
        } else {
            catalog[name].key = newKey;
            console.log(`Changed the key of ${name} to ${newKey}!`);
        }
    }
}


solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);