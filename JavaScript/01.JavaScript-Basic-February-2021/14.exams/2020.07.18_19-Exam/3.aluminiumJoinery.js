function aluminiumJoinery(input) {
    let dogramaCount = Number(input[0]);
    let dogramaType = input[1];
    let delivery = input[2];

    let dogramaPrice = 0;
    let deliveryPrice = 0;
    let total = 0;
    switch (dogramaType) {
        case "90X130":
            dogramaPrice = 110;
            if (dogramaCount >= 30 && dogramaCount <60) {
                dogramaPrice = dogramaPrice * 0.95
            } else if (dogramaCount >= 60) {
                dogramaPrice = dogramaPrice * 0.92
            }
            break;

        case "100X150":
            dogramaPrice = 140;
            if (dogramaCount >=40 && dogramaCount <= 80) {
                dogramaPrice = dogramaPrice * 0.94
            } else if (dogramaCount > 80) {
                dogramaPrice = dogramaPrice * 0.9
            }
            break;

        case "130X180":
            dogramaPrice = 190;
            if (dogramaCount >=20 && dogramaCount <= 50) {
                dogramaPrice = dogramaPrice * 0.93
            } else if (dogramaCount > 50) {
                dogramaPrice = dogramaPrice * 0.88
            }
            break;

        case "200X300":
            dogramaPrice = 250;
            if (dogramaCount >= 25 && dogramaCount <= 50) {
                dogramaPrice = dogramaPrice * 0.91
            } else if (dogramaCount > 50) {
                dogramaPrice = dogramaPrice * 0.86
            }
            break;

        default:
            break;
    }

    total = dogramaCount * dogramaPrice;

    if (delivery == "With delivery") {
        deliveryPrice = 60;
    }

    if (dogramaCount >= 99) {
        total = (total + deliveryPrice) * 0.96;
    }

    if (dogramaCount <= 10) {
        console.log(`Invalid order`);
    } else {
        console.log(`${total.toFixed(2)} BGN`);
    }
}

//aluminiumJoinery(["40", "90X130", "Without delivery"]);
aluminiumJoinery(["105", "100X150", "With delivery"]);
//aluminiumJoinery(["2", "130X180", "With delivery"]);