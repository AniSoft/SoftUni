function solve(input) {

    // [days, plunderForDay, expected] = input.map(Number);
    let days = Number(input.shift());
    let plunderForDay = Number(input.shift());
    let expected = Number(input.shift());

    let total = 0;
    for (let i = 1; i <= days; i++) {
        total += plunderForDay;
        if (i % 3 === 0) {
            total += plunderForDay * 0.5;
        }

        if (i % 5 === 0) {
            total -= total * 0.3;
        }
    }

    if (total >= expected) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = total / expected * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve(['5', '40', '100']);
//solve(['10', '20', '380']);