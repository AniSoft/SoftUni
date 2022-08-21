function tennis(input){
    let racketPrice=Number(input[0]);
    let racketCount=Number(input[1]);
    let sneakers=Number(input[2]);

    let sneakersPrice=racketPrice/6;

    let finalValue=racketPrice*racketCount+sneakers*sneakersPrice;

    finalValue+=finalValue*0.2;

    
    let finalValueD=finalValue/8;
    let finalValueS=finalValue*7/8;

    console.log(`Price to be paid by Djokovic ${Math.floor(finalValueD)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(finalValueS)}`);
}

//tennis(["850","4","2"]);
tennis(["1000","3","1"]);
//tennis(["386","7","4"]);