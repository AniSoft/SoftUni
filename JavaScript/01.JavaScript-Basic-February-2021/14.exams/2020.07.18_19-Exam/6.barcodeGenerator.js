function barcode(input) {
    let start = input[0];
    let end = input[1];

    let start1 = Number(start[0]);
    let start2 = Number(start[1]);
    let start3 = Number(start[2]);
    let start4 = Number(start[3]);

    let end1 = Number(end[0]);
    let end2 = Number(end[1]);
    let end3 = Number(end[2]);
    let end4 = Number(end[3]);

    let one = "";
    let two = "";
    let three = "";
    let four = "";
    let result = "";
    for (let i = start1; i <= end1; i++) {
        if (i % 2 != 0) {
            one = i;
        }
        for (let j = start2; j <= end2; j++) {
            if (j % 2 != 0) {
                two = j;
            }

            for (let k = start3; k <= end3; k++) {

                if (k % 2 != 0) {
                    three = k;
                }

                for (let m = start4; m <= end4; m++) {

                    if (m % 2 != 0) {
                        four = m
                    }

                    result += "" + one + two + three + four + " ";
                }
            }
        }

    }

    console.log(result);

}

barcode(["2345", "6789"]);
//barcode(["3256", "6579"]);
//barcode(["1365", "5877"]);