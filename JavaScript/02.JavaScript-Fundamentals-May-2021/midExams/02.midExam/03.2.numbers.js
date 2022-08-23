function solve(input) {
    let numbers = input.split(' ')
        .map(Number)
        .filter(num => num > (input.split(' ').map(Number).reduce((previous, current) => previous + current, 0) / input.split(' ').length))
        .sort((a, b) => b - a)
        .slice(0, 5)
        .join(' ');

    return numbers ? numbers : "No";

}

console.log(solve('10 20 30 40 50'));