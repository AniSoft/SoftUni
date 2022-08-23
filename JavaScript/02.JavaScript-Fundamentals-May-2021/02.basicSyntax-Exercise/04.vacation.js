function vacation(peopleCount, groupType, dayOfWeek) {
    let totalPrice = 0;

    if (groupType === "Business" && peopleCount >= 100) {
        peopleCount -= 10;
    }

    if (groupType === "Students" && dayOfWeek === "Friday") {
        totalPrice = 8.45 * peopleCount;
    } else if (groupType === "Business" && dayOfWeek === "Friday") {
        totalPrice = 10.90 * peopleCount;
    } else if (groupType === "Regular" && dayOfWeek === "Friday") {
        totalPrice = 15 * peopleCount;
    } else if (groupType === "Students" && dayOfWeek === "Saturday") {
        totalPrice = 9.80 * peopleCount;
    } else if (groupType === "Business" && dayOfWeek === "Saturday") {
        totalPrice = 15.60 * peopleCount;
    } else if (groupType === "Regular" && dayOfWeek === "Saturday") {
        totalPrice = 20 * peopleCount;
    } else if (groupType === "Students" && dayOfWeek === "Sunday") {
        totalPrice = 10.46 * peopleCount;
    } else if (groupType === "Business" && dayOfWeek === "Sunday") {
        totalPrice = 16 * peopleCount;
    } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
        totalPrice = 22.50 * peopleCount;
    }

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice = 0.85 * totalPrice;
    } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice = 0.95 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
