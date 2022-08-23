function convertJson(name, lastName, hairColor) {
    let result = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    };

    console.log(JSON.stringify(result));
}

convertJson('George', 'Jones', 'Brown');