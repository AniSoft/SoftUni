function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let product = number * i;
        console.log(`${number} X ${i} = ${product}`);
    }
}

multiplicationTable(5);
multiplicationTable(2);