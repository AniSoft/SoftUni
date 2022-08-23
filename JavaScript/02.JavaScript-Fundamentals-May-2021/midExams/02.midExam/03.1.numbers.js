function solve(input) {
    let numbers = input.split(' ').map(Number);

    let avg = numbers.reduce((previous, current) => previous + current, 0) / numbers.length;

    let filtered = numbers.filter(num => num > avg);

    let sorted = filtered.sort((a, b) => b - a);

    let firstFive = sorted.slice(0, 5);

    if (firstFive.length === 0) {
        console.log('No');
    } else {
        console.log(firstFive.join(' '));
    }

    // let sum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }
    // let avg = sum / numbers.length;

    // let filtered = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i]>avg) {
    //         filtered.push(numbers[i]);
    //     }        
    // }

    // Descending => b-a
    // Ascending => a-b

}

solve('10 20 30 40 50');
//solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//solve('1');
//solve('-1 -2 -3 -4 -5 -6');