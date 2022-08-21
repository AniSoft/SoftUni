function zoo(input) {
    let dogs = Number(input[0]);
    let otherAnimals = Number(input[1]);
    let total = dogs * 2.50 + otherAnimals * 4;
    console.log(`${total} lv.`);
}

zoo(["5", "4"]);