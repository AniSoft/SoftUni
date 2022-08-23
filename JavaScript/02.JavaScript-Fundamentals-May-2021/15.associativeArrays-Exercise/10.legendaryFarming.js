function solve(input) {
    let mineStorage = new Map([['fragments', 0], ['motes', 0], ['shards', 0]]);
    let materials = input.split(" ");
    for (let i = 0; i < materials.length; i++) {
        if (i % 2 != 0) {
            let value = Number(materials[i - 1]);
            let material = materials[i].toLowerCase();

            if (mineStorage.has(material)) {
                value = mineStorage.get(material) + Number(materials[i - 1]);
            }

            if ((material == 'shards' || material == 'fragments' || material == 'motes') && value >= 250) {
                switch (material) {
                    case 'shards':
                        console.log(`Shadowmourne obtained!`);
                        break;
                    case 'fragments':
                        console.log(`Valanyr obtained!`);
                        break;
                    case 'motes':
                        console.log(`Dragonwrath obtained!`);
                        break;
                }
                value -= 250;
                mineStorage.set(material, value);
                break;
            }

            mineStorage.set(material, value);
        }
    }

    let materialSort = [];
    let junkSort = [];
    for (const [material, value] of mineStorage) {
        if (material == 'shards' || material == 'fragments' || material == 'motes') {
            materialSort.push(material);
        }
        else {
            junkSort.push(material);
        }
    }
    materialSort.sort((a, b) => mineStorage.get(b) - mineStorage.get(a));
    junkSort.sort((a, b) => a.localeCompare(b));
    materialSort = materialSort.concat(junkSort);

    for (const key of materialSort) {
        console.log(`${key}: ${mineStorage.get(key)}`);
    }
}

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')