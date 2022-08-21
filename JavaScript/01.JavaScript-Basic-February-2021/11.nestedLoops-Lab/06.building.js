function building(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    for (let i = a; i > 0; i--) {
        let str = "";
        for (let j = 0; j < b; j++) {
            if (i == a) {
                str += `L${i}${j} `;
            } else {
                if (i % 2 == 0) {
                    str += `O${i}${j} `;
                } else {
                    str += `A${i}${j} `;
                }
            }            
        }
        console.log(str);
    }
}

building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);