function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let totalApartment = 0;
    let totalStudio = 0;
    if (month == "May" || month == "October") {
        if (nights > 7 && nights <= 14) {
            totalStudio = nights * 50 * 0.95;
            totalApartment = nights * 65;
        } else if (nights > 14) {
            totalStudio = nights * 50 * 0.70;
            totalApartment = nights * 65 * 0.9;
        } else if (nights <= 7) {
            totalStudio = nights * 50;
            totalApartment = nights * 65;
        }

    } else if (month == "June" || month == "September") {
        if (nights > 14) {
            totalStudio = nights * 75.2 * 0.80;
            totalApartment = nights * 68.7 * 0.9;
        } else if (nights <= 14) {
            totalStudio = nights * 75.2;
            totalApartment = nights * 68.7;
        }

    } else if (month == "July" || month == "August") {
        if (nights > 14) {
            totalStudio = nights * 76;
            totalApartment = nights * 77 * 0.9;
        } else if (nights <= 14) {
            totalStudio = nights * 76;
            totalApartment = nights * 77;
        }
    }

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);