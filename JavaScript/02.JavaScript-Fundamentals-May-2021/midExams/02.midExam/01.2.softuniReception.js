function solve(input) {
    let [em1, em2, em3, students] = input.map(Number);
    let studentsPerHour = em1 + em2 + em3;
    let time = 1;

    let neededHours = Math.ceil((students - studentsPerHour) / studentsPerHour);
    let breakHours = Math.floor(neededHours / 3);
    time = Math.ceil(time + neededHours + breakHours);
    console.log(`Time needed: ${time >= 0 ? time : 0}h.`);
}

solve(['5', '6', '4', '20']);
solve(['1', '2', '3', '45']);
solve(['3', '2', '5', '40']);