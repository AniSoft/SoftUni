function scholarship(input) {
    let budget = Number(input[0]);
    let avgGrade = Number(input[1]);
    let minSalary = Number(input[2]);

    let isSocialScolarship = false
    let socialScolarship = 0;
    let excellentGradeScolarship = 0;
    let isScolarship = false;

    if (budget < minSalary) {
        isSocialScolarship = true;
    }

    if (avgGrade < 4.5) {
        isSocialScolarship = false;
    }

    if (isSocialScolarship) {
        isScolarship = true;
        socialScolarship = minSalary * 0.35;
    }

    if (avgGrade >= 5.50) {
        isScolarship = true;
        excellentGradeScolarship = avgGrade * 25;
    }

    if (!isScolarship) {
        console.log(`You cannot get a scholarship!`);
    } else if (excellentGradeScolarship >= socialScolarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentGradeScolarship)} BGN`);
    } else if (excellentGradeScolarship < socialScolarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScolarship)} BGN`);
    }
}

scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"]);
