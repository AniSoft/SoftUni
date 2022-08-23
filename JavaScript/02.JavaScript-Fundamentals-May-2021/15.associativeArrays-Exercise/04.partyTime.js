function solve(listOfGuests) {
    let indexOfParty = listOfGuests.indexOf('PARTY');
    let digitList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let vip = [];
    let regular = [];

    // Adding guests
    for (let i = 0; i < indexOfParty; i++) {
        let currentGuest = listOfGuests[i];

        if (digitList.includes(currentGuest[0])) {
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }
    }

    // Removing guests
    for (let i = indexOfParty + 1; i < listOfGuests.length; i++) {
        let currentGuest = listOfGuests[i];

        if (vip.includes(currentGuest)) {
            vip.splice(vip.indexOf(currentGuest), 1);
        } else if (regular.includes(currentGuest)) {
            regular.splice(regular.indexOf(currentGuest), 1);
        }
    }

    let totalGestsLeft = vip.length + regular.length;
    console.log(totalGestsLeft);

    for (let guest of vip) {
        console.log(guest);
    }

    for (let guest of regular) {
        console.log(guest);
    }
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);