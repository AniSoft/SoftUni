function solve(input) {
    let message = input.shift();

    let line = input.shift();
    while (line != "Reveal") {
        let [command, firstArgument, secondArgument] = line.split(':|:');
        let hasError = false;

        switch (command) {
            case 'InsertSpace':
                let index = Number(firstArgument);
                message = message.substring(0, index) + ' ' + message.substring(index);
                break;

            case 'Reverse':
                if (message.includes(firstArgument)) {
                    //Slice
                    message = message.replace(firstArgument, '');

                    //Reverse
                    //let reversedSubstring = firstArgument.split('').reverse().join('');

                    let reversedSubstring = '';
                    for (let char of firstArgument) {
                        reversedSubstring = char + reversedSubstring;
                    }

                    // Add to end
                    message += reversedSubstring;

                } else {
                    console.log('error');
                    hasError = true;
                }
                break;

            case 'ChangeAll':
                while (message.includes(firstArgument)) {
                    message = message.replace(firstArgument, secondArgument);
                }
                break;

            default:
                break;
        }

        if (!hasError) {
            console.log(message);
        }

        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}


solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);

// solve([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);