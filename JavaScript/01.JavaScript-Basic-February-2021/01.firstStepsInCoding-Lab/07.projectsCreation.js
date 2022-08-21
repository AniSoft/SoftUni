function projects(input) {
    let name = input[0];
    let numbers = Number(input[1]);
    let total = numbers * 3;
    console.log(`The architect ${name} will need ${total} hours to complete ${numbers} project/s.`)
}

projects(["George", "4"])