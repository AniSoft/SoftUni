function solve(input) {
    let price = 0;

    let customer = '';
    for (let line of input) {
        if (line === 'regular' || line === 'special') {
            customer = line;
            break;
        }

        let currentPrice = Number(line);
        if (currentPrice <= 0) {
            console.log(`Invalid price!`);
            continue;
        }

        price += currentPrice;

    }

    if (price === 0) {
        console.log(`Invalid order!`);
    } else {
        let tax = price * 0.2;
        let total = price + tax;
        if (customer === 'special') {
            total *= 0.9;
        }

        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price.toFixed(2)}$
Taxes: ${tax.toFixed(2)}$
-----------
Total price: ${total.toFixed(2)}$`);
    }
}

solve(['1050', '200', '450', '2', '18.50', '16.86', 'special']);