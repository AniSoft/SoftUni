function movie(input){
    let name=input[0];
    let days=Number(input[1]);
    let tickets=Number(input[2]);
    let priceTicket=Number(input[3]);
    let cinemaPart=Number(input[4]);

    let total=0;

    total=days*tickets*priceTicket*((100-cinemaPart)/100);
    console.log(`The profit from the movie ${name} is ${total.toFixed(2)} lv.`);
}

movie(["The Programmer","20","500","7.50","7"]);
movie(["Python Basics","40","34785","10.45","14"]);
movie(["The Jungle","22","20500","9.37","30"]);