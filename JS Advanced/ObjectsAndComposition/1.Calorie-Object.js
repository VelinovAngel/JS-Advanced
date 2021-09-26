function CalorieObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = parseInt(arr[i + 1]);     
    }
    console.log(obj);
}

CalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
CalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);