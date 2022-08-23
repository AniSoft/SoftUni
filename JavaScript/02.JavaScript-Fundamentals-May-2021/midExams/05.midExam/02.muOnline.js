function solve(input) {
    let health = 100;
    let bitcoin = 0;

    let rooms = input.split("|");

    let count = 0;
    for (let i = 0; i < rooms.length; i++) {
        let token = rooms[i].split(" ");
        let command = token[0];
        let number = Number(token[1]);

        count++;
        if (command === "potion") {
            let need = 100 - health;
            if (health + number < 100) {
                health += number;
                need = number;
            } else {
                health = 100;
            }
            console.log(`You healed for ${need} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === "chest") {
            console.log(`You found ${number} bitcoins.`);
            bitcoin += number;
        } else {
            health -= number;
            if (health > 0) {

                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }

    if (count === rooms.length) {
        console.log(`You've made it!\nBitcoins: ${bitcoin}\nHealth: ${health}`);
    }
}

solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
//solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');