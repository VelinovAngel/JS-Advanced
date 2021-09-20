function PrinNthElement(array, n) {
    let resut = [];
    for (let i = 0; i < array.length; i += n) {
        resut.push(array[i]);
    }
    return resut;
}

console.log(PrinNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2));

console.log(PrinNthElement(['dsa',
    'asd',
    'test',
    'tset'],
    2));

console.log(PrinNthElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6));