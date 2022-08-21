function school(input) {
    let countPen = Number(input[0]);
    let countMarker = Number(input[1]);
    let littre = Number(input[2]);
    let discount = Number(input[3]);

    let pricePen=5.80;
    let priceMarker=7.20;
    let priceLittre=1.20;

    let total=0;

    total=(countPen*pricePen+countMarker*priceMarker+littre*priceLittre)*((100-discount)/100);
    console.log(`${total.toFixed(3)}`);

}

school(["2", "3", "2.5", "25"]);
school(["4", "2", "5", "13"]);