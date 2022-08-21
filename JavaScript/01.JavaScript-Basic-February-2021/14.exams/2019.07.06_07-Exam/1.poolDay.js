function pool(input){
    let people=Number(input[0]);
    let tax=Number(input[1]);
    let priceChair=Number(input[2]);
    let priceUmbrella=Number(input[3]);

    let total=0;
    total=people*tax + Math.ceil((people/2))*priceUmbrella +  Math.ceil(people*0.75)*priceChair;

    console.log(`${total.toFixed(2)} lv.`);
}

pool(["21","5.50","4.40","6.20"]);
pool(["50","6","8","4"]);