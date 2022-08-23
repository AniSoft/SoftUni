function solve(input) {
    input = input.map(Number);
    let emp1 = input.shift();
    let emp2 = input.shift();
    let emp3 = input.shift();
    let totalStudents = input.shift();

    //Variant
    //let emp1=Number(input[0]);
    //let emp2=Number(input[1]);
    //let emp3=Number(input[2]);
    //let totalStudents=Number(input[3]);

    let studentPerHour = emp1 + emp2 + emp3;
    let answeredStudents = 0;
    let hours = 0;

    while (answeredStudents < totalStudents) {
        if (hours % 4 === 0 && hours !== 0) {
            hours++;
            continue;
        }

        answeredStudents += studentPerHour;
        hours++;
    }

    if (hours % 4 === 0 && hours !== 0) {
        hours++;
    }

    console.log(`Time needed: ${hours}h.`);
}

solve(['5', '6', '4', '20']);
solve(['1', '2', '3', '45']);
solve(['3', '2', '5', '40']);