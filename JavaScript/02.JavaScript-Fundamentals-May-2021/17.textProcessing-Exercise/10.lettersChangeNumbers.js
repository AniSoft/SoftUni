function solve(input) {
    let result = [];
    let elements = input.split(' ');
    for (let elem of elements) {
        let firstCalc = 0;
        elem = elem.trim();
        if (elem === '') {
            continue;
        }
        if (elem[0] >= 'A' && elem[0] <= 'Z') {
            let position = elem.charCodeAt(0) - 64;
            let number = Number(elem.slice(1, -1)) / position;
            firstCalc = number;
        }
        else {
            let position = elem.charCodeAt(0) - 96;
            let number = Number(elem.slice(1, -1)) * position;
            firstCalc = number;
        }

        if (elem[elem.length - 1] >= 'A' && elem[elem.length - 1] <= 'Z') {
            let position = elem.charCodeAt(elem.length - 1) - 64;
            firstCalc -= Number(position);
        }
        else {
            let position = elem.charCodeAt(elem.length - 1) - 96;
            firstCalc += Number(position);
        }
        result.push(firstCalc);
    }
    console.log(result.reduce((total, num) => total + num).toFixed(2))
}

solve('P34562Z q2576f   H456z');