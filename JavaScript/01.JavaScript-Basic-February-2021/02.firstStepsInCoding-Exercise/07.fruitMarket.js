function fruitMarket(input) {
    let strawberyPrice = Number(input[0]);
    let banana = Number(input[1]);
    let orange = Number(input[2]);
    let raspberry = Number(input[3]);
    let strawbery = Number(input[4]);

    let raspberryPrice = strawberyPrice * 0.5;
    let orangePrice = raspberryPrice * 0.6;
    let bananaPrice = raspberryPrice * 0.2;

    total = banana * bananaPrice + orange * orangePrice + raspberry * raspberryPrice + strawbery * strawberyPrice;

    console.log(total);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);