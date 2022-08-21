function time(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);

    let totalMin = h * 60 + m;
    let totalMinAfter = totalMin + 15;

    let finalH = Math.floor(totalMinAfter / 60);
    if (finalH > 23) {
        finalH = 0;
    }

    let finalM = totalMinAfter % 60;
    if (finalM < 10) {
        console.log(`${finalH}:0${finalM}`);
    }else{
        console.log(`${finalH}:${finalM}`);
    }

}

time(["11", "08"]);