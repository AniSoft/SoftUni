function solve(input) {
    let heroes = {};
    let n = Number(input.shift());

    // Fill the object
    input.splice(0, n)
        .forEach(line => {
            let [heroName, hp, mp] = line.split(' ');
            hp = Number(hp);
            mp = Number(mp);
            heroes[heroName] = { hp, mp };
        });

    let commandParser = {
        'CastSpell': castSpell,
        'Recharge': recharge,
        'TakeDamage': takeDamage,
        'Heal': heal
    };

    // Execute commands    
    input.forEach(line => {
        let [command, ...tokens] = line.split(' - ');

        if (command !== 'End') {
            let func = commandParser[command];
            console.log(func(heroes, ...tokens));
        }
    })

    let sortedHeroes = Object.entries(heroes)
        .sort(compareHeroes);

    for (let [heroName, heroInfo] of sortedHeroes) {
        let { hp, mp } = heroInfo;

        console.log(heroName);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }

    function compareHeroes(a, b) {
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        return bInfo.hp - aInfo.hp || aName.localeCompare(bName)
    }

    function castSpell(heroes, heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
        let hero = heroes[heroName];

        if (hero.mp >= mpNeeded) {
            hero.mp -= mpNeeded;
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
        }

        return `${heroName} does not have enough MP to cast ${spellName}!`
    }

    function takeDamage(heroes, heroName, damage, attacker) {
        damage = Number(damage);
        let hero = heroes[heroName];

        hero.hp -= damage;
        if (hero.hp > 0) {
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        }

        delete heroes[heroName];
        return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(heroes, heroName, amount) {
        amount = Number(amount);
        let hero = heroes[heroName];
        let oldValue = hero.mp;
        hero.mp = Math.min(200, hero.mp + amount);

        return `${heroName} recharged for ${hero.mp - oldValue} MP!`
    }

    function heal(heroes, heroName, amount) {
        amount = Number(amount);
        let hero = heroes[heroName];
        let oldValue = hero.hp;
        hero.hp = Math.min(100, hero.hp + amount);

        return `${heroName} healed for ${hero.hp - oldValue} HP!`
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);