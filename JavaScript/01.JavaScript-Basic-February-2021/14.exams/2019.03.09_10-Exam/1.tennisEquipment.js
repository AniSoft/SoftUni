function tennis(input) {
    let priceRaket = Number(input[0]);
    let raket = Number(input[1]);
    let shouse = Number(input[2]);

    let priceShouse = priceRaket / 6;
    
    let total = raket * priceRaket + shouse * priceShouse;
    total+=total*0.2

    let totalD=total*1/8;
    let totalS=total*7/8;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalD)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalS)}`);
}

//tennis(["850", "4", "2"]);
tennis(["1000", "3", "1"]);
//tennis(["386", "7", "4"]);