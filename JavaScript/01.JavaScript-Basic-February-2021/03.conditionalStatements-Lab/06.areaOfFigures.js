function calcArea(input) {
    let type = input[0];
    let area;

    if (type == "square") {
        let side = Number(input[1]);
        area = Math.pow(side, 2);
    } else if (type == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (type == "circle") {
        let radius = Number(input[1]);
        area = Math.PI * Math.pow(radius, 2);
    } else if (type == "triangle") {
        let c = Number(input[1]);
        let h = Number(input[2]);
        area = c * h / 2;
    }

    console.log(area.toFixed(3));
}

calcArea(["square", "5"]);
calcArea(["rectangle", "7", "2.5"]);
calcArea(["circle", "6"]);
calcArea(["triangle", "4.5", "20"]);
