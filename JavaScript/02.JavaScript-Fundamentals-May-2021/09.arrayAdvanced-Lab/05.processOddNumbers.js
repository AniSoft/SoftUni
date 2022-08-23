function processOddNumbers(nums) {
    let predicate = (x, i) => i % 2 == 1;
    let filtered = nums.filter(predicate);
    let operation = x => x * 2;
    let mapped = filtered.map(operation);

    mapped.reverse();

    console.log(mapped.join(' '));
}


function mapTask(nums) {
    return nums
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');
}


let mapTask = n => n
    .filter((x, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);