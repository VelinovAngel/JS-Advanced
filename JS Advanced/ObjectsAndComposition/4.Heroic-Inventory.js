function heroicInventory(input) {
    let result = [];

    for (const item of input) {
        let [name, level, items] = item.split(' / ');
        name = name;
        level = Number(level);

        result.push({
            name,
            level: level,
            items: items ? items.split(', ') : [],
        });
    }
    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));