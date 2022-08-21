function addBag(input) {
    let bag20Price = Number(input[0]);
    let load = Number(input[1]);
    let day = Number(input[2]);
    let bagCount = Number(input[3]);

    let total = 0;
    let tax = 0;
    if (load <10) {
        tax = bag20Price * 0.2;
    } else if (load >= 10 && load <= 20) {
        tax = bag20Price * 0.5;
    } else {
        tax = bag20Price;
    }

    if (day > 30) {
        tax = tax * 1.1;
    } else if (day >=7 && day <= 30) {
        tax = tax * 1.15;
    } else if (day <7) {
        tax = tax * 1.40;
    }

    total = tax * bagCount;

    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);

}

addBag(["30", "18", "15", "2"]);
addBag(["25.50", "5", "36", "6"]);
addBag(["63.80", "23", "3", "1"]);