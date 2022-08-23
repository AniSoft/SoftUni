function solve(input) {
    let carsCount = Number(input.shift());

    let cars = {};
    for (let i = 0; i < carsCount; i++) {
        let [name, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        //cars[name]={mileage:mileage, fuel:fuel}
        cars[name] = { mileage, fuel };
    }

    let commandLine = input.shift();
    while (commandLine != 'Stop') {
        let [command, carName, firstArgument, secondArgument] = commandLine.split(' : ');

        switch (command) {
            case "Drive": {
                let distance = Number(firstArgument);
                let fuel = Number(secondArgument);
                if (cars[carName].fuel >= fuel) {
                    cars[carName].mileage += distance;
                    cars[carName].fuel -= fuel;
                    console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }

                if (cars[carName].mileage >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
                break;
            }

            case "Refuel": {
                let fuel = Number(firstArgument);
                let oldFuel = cars[carName].fuel;
                //cars[carName].fuel = Math.min(75, cars[carName].fuel + fuel);
                if (oldFuel + fuel > 75) {
                    cars[carName].fuel = 75;
                    console.log(`${carName} refueled with ${75 - oldFuel} liters`);
                } else {
                    cars[carName].fuel += fuel;
                    console.log(`${carName} refueled with ${fuel} liters`);
                }
                break;
            }

            case "Revert": {
                let kilometers = Number(firstArgument);
                if (cars[carName].mileage - kilometers < 10000) {
                    cars[carName].mileage = 10000;
                } else {
                    cars[carName].mileage -= kilometers;
                    console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
                }
                break;
            }

            default:
                break;
        }

        commandLine = input.shift();
    }

    let carEntries = Object.entries(cars);

    let sortedCarEntries = carEntries.sort((a, b) => {
        if (b[1].mileage === a[1].mileage) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].mileage - a[1].mileage;
        }
    });

    for (let kvp of sortedCarEntries) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);