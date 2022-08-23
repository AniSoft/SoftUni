function orders(product, qty) {
    let price = 0;

    switch (product) {
        case 'coffee':
            price = 1.5;
            break;

        case 'water':
            price = 1.00
            break;

        case 'coke':
            price = 1.40
            break;

        case 'snacks':
            price = 2.00
            break;

        default:
            break;
    }

    let total = price * qty;
    console.log(total.toFixed(2));
}

orders('water', 5);
//orders('coffe', 2);