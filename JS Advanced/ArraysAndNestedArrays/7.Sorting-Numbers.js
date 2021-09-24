function sortingNumbers(input) {
    let sortedArr = input.sort((a, b) => a - b);
    let newArr = [];
    while (sortedArr.length > 0) {
        let small = sortedArr.shift();
        let big = sortedArr.pop();
        newArr.push(small);
        newArr.push(big);
    }
    return newArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));