function matrix(number) {
    for (let i = 0; i < number; i++) {
        let row = '';
        for (let j = 0; j < number; j++) {
            row += `${number} `;
        }
        console.log(row);
    }
}

matrix(3);
matrix(7);
matrix(2);