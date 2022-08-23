function solve(input) {
    let register = {};
    for (const line of input) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");

        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
            register[systemName][componentName] = [];
        }
        else if (!register[systemName].hasOwnProperty(componentName)) {
            register[systemName][componentName] = [];
        }
        register[systemName][componentName].push(subcomponentName);
    }

    let sysKeys = Object.keys(register);
    sysKeys.sort((a, b) => {
        let keyA = Object.keys(register[a]);
        let keyB = Object.keys(register[b]);

        if (keyA.length > keyB.length) {
            return -1;
        }
        else if (keyA.length < keyB.length) {
            return 1;
        }
        else {
            return a.localeCompare(b);
        }
    });


    for (const key of sysKeys) {
        let compKeys = Object.keys(register[key]);
        compKeys.sort((a, b) => {
            let keyA = Object.keys(register[key][a]);
            let keyB = Object.keys(register[key][b]);

            if (keyA.length > keyB.length) {
                return -1;
            }
            else if (keyA.length < keyB.length) {
                return 1;
            }
        });

        console.log(key);

        for (const comp of compKeys) {
            console.log(`|||${comp}`);

            for (const sub of register[key][comp]) {
                console.log(`||||||${sub}`)
            }
        }
    }
}

solve([

    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);