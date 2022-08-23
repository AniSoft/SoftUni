function solve(input) {
    let people = Number(input[0]);
    let wagons = input[1].split(' ').map(Number);

    while (people != 0 && isFree(wagons)) {
        wagons = wagons.map(w => {  // 0 2 0 -> 4 2 0 -> 4 4 0
            let n = 4 - w;
            if (n > people) {
                n = people;
            }
            people -= n;
            w += n;
            return w;
        })
    }

    if (isFree(wagons)) {
        console.log(`The lift has empty spots!`);
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }

    console.log(wagons.join(' '));

    function isFree(array) {
        return array.filter(x => x < 4).length > 0; // 1 > 0 -> true
    }
}

solve(['15', '0 0 0 0']);
solve(['20', '0 2 0']);