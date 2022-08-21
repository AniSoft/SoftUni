function change(input) {
    let countBitcoin = Number(input[0]);
    let countYuan = Number(input[1]);
    let comission = Number(input[2]);

    let euro = 1.95;
    let dolar = 1.76;
    let bitcoin = 1168;
    let yuan = 0.15 * 1.76;

    let total = ((countBitcoin * bitcoin + countYuan * yuan) / euro) * (1 - (comission / 100));

    console.log(`${total.toFixed(2)}`);
}

change(["1", "5", "5"]);
change(["20", "5678", "2.4"]);