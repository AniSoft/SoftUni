function movieRating(input) {
    index = 0
    let num = Number(input[index]);
    index++;

    let max = 0;
    let maxName = "";
    let min = 99999999999999;
    let minName = "";
    let aver = 0;

    let allRating=0;
    for (let i = 0; i < num; i++) {
        let name = input[index];
        index++;
        let rating = Number(input[index]);
        index++;
        
        allRating += rating;

        if (rating > max) {
            max = rating;
            maxName=name;
        } 
        
        if (rating < min) {
            min = rating;
            minName=name;
        }
    }
    aver = allRating / num;

    console.log(`${maxName} is with highest rating: ${max}`);
    console.log(`${minName} is with lowest rating: ${min}`);
    console.log(`Average rating: ${aver.toFixed(1)}`);
}

movieRating(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"]);

movieRating(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"]);