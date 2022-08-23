function solve(input) {
    input = input.map(Number);
    let students = input.shift();
    let lectures = input.shift();
    let bonus = input.shift();

    maxTotalBonus = 0;
    winStudentAttended = 0;

    for (let i = 0; i < students; i++) {
        let countAttendance = input[i];

        let totalBonusStudent = 0;
        totalBonusStudent = countAttendance / lectures * (5 + bonus);

        if (totalBonusStudent >= maxTotalBonus) {
            maxTotalBonus = totalBonusStudent;
            winStudentAttended = countAttendance
        } else {
            continue;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxTotalBonus)}.`);
    console.log(`The student has attended ${winStudentAttended} lectures.`);
}

solve(['5', '25', '30', '12', '19', '24', '16', '20']);
//solve(['10', '30', '14', '8','23', '27', '28', '15','17', '25', '26', '5','18']);