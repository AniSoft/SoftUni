function solve(input) {
    let gladiators = {};
    for (const line of input) {
        if (line != 'Ave Cesar') {
            if (!line.includes('vs')) {
                let [name, technique, skill] = line.split(" -> ");
                if (!gladiators.hasOwnProperty(name)) {
                    gladiators[name] = {};
                    gladiators[name][technique] = {};
                    gladiators[name].total = Number(skill)
                    gladiators[name][technique].skill = Number(skill);
                }
                else {
                    if (!gladiators[name].hasOwnProperty(technique)) {
                        gladiators[name][technique] = {};
                        gladiators[name][technique].skill = Number(skill);
                        gladiators[name].total += Number(skill);

                    }
                    else if (gladiators[name][technique].skill < Number(skill)) {
                        gladiators[name][technique].skill = Number(skill);
                        gladiators[name].total -= gladiators[name][technique].skill;
                        gladiators[name].total += Number(skill);
                    }
                }
            }
            else {
                let [firstGladiator, secondGladiator] = line.split(" vs ");
                if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                    for (const technique in gladiators[firstGladiator]) {
                        if (gladiators[secondGladiator].hasOwnProperty(technique) && technique != 'total') {
                            if (gladiators[firstGladiator][technique].skill > gladiators[secondGladiator][technique].skill) {
                                delete gladiators[secondGladiator];
                                break;
                            }
                            else {
                                delete gladiators[firstGladiator];
                                break;
                            }
                        }
                    }
                }
            }
        }
        else {
            let sorted = Object.keys(gladiators);
            sorted.sort((a, b) => gladiators[b].total - gladiators[a].total);
            for (const name of sorted) {
                let forSort = []
                for (const tech in gladiators[name]) {
                    if (tech != 'total') {
                        forSort.push(tech);
                    }
                }
                forSort.sort((a, b) => {
                    if (gladiators[name][a].skill > gladiators[name][b].skill) {
                        return -1
                    }
                    else if (gladiators[name][a].skill < gladiators[name][b].skill) {
                        return 1;
                    }
                    else {
                        return a.localeCompare(b);
                    }
                });
                console.log(`${name}: ${gladiators[name].total} skill`)
                for (const tech of forSort) {
                    console.log(`- ${tech} <!> ${gladiators[name][tech].skill}`);
                }
            }
        }
    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])