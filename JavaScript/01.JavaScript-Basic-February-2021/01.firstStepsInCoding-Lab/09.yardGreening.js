function yardGreening(input) {
    let yard = Number(input[0]);
    let all = yard * 7.61;
    let discount = all * 0.18;
    let final = all - discount;
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);