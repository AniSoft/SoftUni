function lunch(input) {
    let cake = Number(input[0]);
    let eggs = Number(input[1]);
    let cookies = Number(input[2]);

    let priceCake = 3.20;
    let priceEggs = 4.35;
    let priceCookies = 5.40;
    let paintPrice = 0.15;

    let total = 0;
    total = cake * priceCake + eggs * priceEggs + cookies * priceCookies + paintPrice * 12 * eggs;

    console.log(`${total.toFixed(2)}`);
}

lunch(["3", "2", "3"]);
lunch(["4", "4", "3"]);