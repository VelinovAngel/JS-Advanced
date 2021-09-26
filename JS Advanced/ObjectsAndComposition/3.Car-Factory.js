function carFactory(obj) {
    let newObj = {};
    function engine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }


    newObj.model = obj.model;
    newObj.engine = engine(obj.power);
    newObj.carriage = { type: obj.carriage, color: obj.color };
    newObj.wheels = new Array(4).fill(obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize, 0, 4);

    return newObj;
}

// carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// );

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));