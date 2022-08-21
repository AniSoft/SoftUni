function trainers(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let avgGrade = 0;
    while (command != "Finish") {
        counter++;
        let presenatationName = command;
        let tempAvgGrade = 0;

        for (let i = 0; i < n; i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempAvgGrade += tempGrade;
        }
        
        tempAvgGrade = tempAvgGrade / n;
        console.log(`${presenatationName} - ${tempAvgGrade.toFixed(2)}.`);
        avgGrade += tempAvgGrade;

        command = input[index];
        index++;
    }
    avgGrade = avgGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);