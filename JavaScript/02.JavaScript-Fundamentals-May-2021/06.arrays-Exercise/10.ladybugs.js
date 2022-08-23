function solve(commandArray) {
    let fieldSize = commandArray.shift();
    let indexesBugs = commandArray.shift().split(' ').map(Number);
    let field = [];

    //Filling field with 0s
    counter = 0;
    while (counter != fieldSize) {
        field.push(0);
        counter++;
    }

    //Setting bugs on the field
    for (const index of indexesBugs) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (const line of commandArray) {
        let [bugIndex, direction, distance] = line.split(' ');
        bugIndex = Number(bugIndex);
        distance = Number(distance);

        if (field[bugIndex] !== 1 || bugIndex < 0 || bugIndex >= field.length) {
            continue;
        }
        //Making negative dist to positive and swap direction
        if (distance < 0) {
            distance = Math.abs(distance);
            if (direction === 'right') {
                direction = 'left';
            }
            else if (direction === 'left') {
                direction = right;
            }
        }

        field[bugIndex] = 0;

        //Moving the bug
        if (direction === 'right') {
            let newIndex = bugIndex + distance;
            if (field[newIndex] === 1) {
                newIndex += distance;
            }
            if (newIndex < field.length) {
                field[newIndex] = 1;
            }
        }
        else {
            let newIndex = bugIndex - distance;
            if (field[newIndex] === 1) {
                newIndex -= distance;
            }
            if (newIndex >= 0) {
                field[newIndex] = 1;
            }
        }
    }
    console.log(field.join(' '));
}


solve([3, '2', '2 right 1']);