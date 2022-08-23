function sum(numsAsString) {
    let first = Number(numsAsString.shift());
    let last = Number(numsAsString.pop());

    return first + last;
}

console.log(sum([20, 30, 40]));
console.log(sum([10, 17, 22, 33]));
console.log(sum([11, 58, 69]));