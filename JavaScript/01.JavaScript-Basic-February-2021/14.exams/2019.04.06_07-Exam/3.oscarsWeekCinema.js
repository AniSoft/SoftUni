function oscar(input) {
    let name = input[0];
    let type = input[1];
    let count = Number(input[2]);

    let final = 0;
    switch (name) {
        case "A Star Is Born":
            switch (type) {
                case "normal":
                    final = count * 7.50;
                    break;
                case "luxury":
                    final = count * 10.50;
                    break;
                case "ultra luxury":
                    final = count * 13.50;
                    break;
                default:
                    break;
            }
            break;

        case "Bohemian Rhapsody":
            switch (type) {
                case "normal":
                    final = count * 7.35;
                    break;
                case "luxury":
                    final = count * 9.45;
                    break;
                case "ultra luxury":
                    final = count * 12.75;
                    break;
                default:
                    break;
            }
            break;

        case "Green Book":
            switch (type) {
                case "normal":
                    final = count * 8.15;
                    break;
                case "luxury":
                    final = count * 10.25;
                    break;
                case "ultra luxury":
                    final = count * 13.25;
                    break;
                default:
                    break;
            }
            break;

        case "The Favourite":
            switch (type) {
                case "normal":
                    final = count * 8.75;
                    break;
                case "luxury":
                    final = count * 11.55;
                    break;

                case "ultra luxury":
                    final = count * 13.95;
                    break;
                default:
                    break;
            }
            break;

        default:
            break;
    }

    console.log(`${name} -> ${final.toFixed(2)} lv.`);
}

oscar(["A Star Is Born", "luxury", "42"]);
oscar(["Green Book", "normal", "63"]);
oscar(["The Favourite", "ultra luxury", "34"]);