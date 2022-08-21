function concatenateData(input) {
    let name = input[0];
    let surname = input[1];
    let age = input[2];
    let town = input[3];
    console.log(`You are ${name} ${surname}, a ${age}-years old person from ${town}.`)
}

concatenateData(['Maria', 'Ivanova', 20, 'Sofia'])