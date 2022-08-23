function printGrade(grade) {
    let description;
    if (grade < 3) {
        description = "Fail";
        grade = 2
    } else if (grade >= 3 && grade < 3.5) {
        description = "Poor";
    } else if (grade < 4.5) {
        description = "Good";
    } else if (grade < 5.5) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    if (grade < 3) {
        console.log(`${description} (${grade.toFixed(0)})`);
    } else {
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}

//printGrade(3.33);
//printGrade(4.50);
printGrade(2.99);