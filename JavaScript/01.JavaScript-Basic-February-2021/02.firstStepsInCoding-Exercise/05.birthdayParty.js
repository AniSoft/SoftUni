function birthdayParty(input) {
    let rentRoom = Number(input[0]);
    let cake = rentRoom * 0.20;
    let drinks = cake * 0.55;
    let animator = rentRoom / 3

    let total = rentRoom + cake + drinks + animator
    console.log(total)
}

birthdayParty(["2250"]);