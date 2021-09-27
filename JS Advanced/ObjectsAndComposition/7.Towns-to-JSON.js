function townsToJson(arr) {
    let arrResult = [];

    let [first, second, third] = arr[0].split(['|']).slice(1, arr[0].length - 1);
    first = first.trim();
    second = second.trim();
    third = third.trim();

    for (let i = 1; i < arr.length; i++) {
        const obj = {};
        let [town, latitude, longitude] = arr[i].split(['|']).slice(1, arr[i].length - 1);
        obj[first] = town.trim();
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        obj[second] = Number(latitude);
        obj[third] = Number(longitude);
        arrResult.push(obj);
    }
    return JSON.stringify(arrResult);
}


console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));