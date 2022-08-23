function solve(input) {
    let messageReg = { 'A': [], 'D': [] };
    let messages = Number(input.shift());
    let decoder = /[SsTtAaRr]/g;
    for (const line of input) {
        let count = 0;
        let messageLog = '';
        while (decoder.exec(line)) {
            count++;
        }

        for (const char of line) {
            messageLog += String.fromCharCode(char.charCodeAt(0) - count);
        }
        let validInfo = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*:(?<population>\d+)[^\@\-\!\:\>]*!(?<type>[AD])![^\@\-\!\:\>]*->(?<soldier>\d+)/g;
        while (valid = validInfo.exec(messageLog)) {
            messageReg[valid.groups['type']].push({
                name: valid.groups['name'],
                population: valid.groups['population'],
                type: valid.groups['type'], soldier: valid.groups['soldier']
            });
        }
    }
    console.log(`Attacked planets: ${messageReg['A'].length}`);
    for (const planet of messageReg['A'].sort((a, b) => (a.name).localeCompare(b.name))) {
        console.log(`-> ${planet.name}`)
    }
    console.log(`Destroyed planets: ${messageReg['D'].length}`);
    for (const planet of messageReg['D'].sort((a, b) => (a.name).localeCompare(b.name))) {
        console.log(`-> ${planet.name}`)
    }
}

solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])