function cinema(input) {
    let index = 0;
    let maxPeople = Number(input[index]);
    index++;

    let price = 5;
    let counter = 0;
    let total = 0;

    let command = input[index];
    index++;
    while (command != "Movie time!") {
        let people = Number(command);
        counter += people;

        if (command == "Movie time!") {
            break;
        }

        if (counter > maxPeople) {
            break;
        }

        if (people % 3 == 0) {
            total += people * price - 5;
        } else {
            total += people * price;
        }

        command = input[index];
        index++;
    }

    let diff = maxPeople - counter;
    if (command == "Movie time!") {
        console.log(`There are ${diff} seats left in the cinema.`);
    } else {
        console.log(`The cinema is full.`);
    }
    console.log(`Cinema income - ${total} lv.`);
}

cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"]);

cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"]);

cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"]);