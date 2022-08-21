function repainting(input){
    let nailon=Number(input[0]);
    let paint=Number(input[1]);
    let razreditel=Number(input[2]);
    let hours=Number(input[3]);

    let priceNailon=1.50;
    let pricePaint=14.50;
    let priceRazreditel=5.00;

    let materials=0;
    let total=0;

    materials=priceNailon*(nailon+2)+pricePaint*paint*1.1+razreditel*priceRazreditel+0.40;

    total=materials+materials*0.30*hours;
    console.log(`Total expenses: ${total.toFixed(2)} lv.`);
}

repainting(["10","11","4","8"]);
repainting(["5","10","10","1"]);
repainting(["90","99","28","9"]);