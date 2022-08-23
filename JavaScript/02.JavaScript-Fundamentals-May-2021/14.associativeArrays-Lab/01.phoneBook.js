function solve(input) {
    let phonebook = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phone = tokens[1];

        phonebook[name] = phone;
    }

    for (let name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);