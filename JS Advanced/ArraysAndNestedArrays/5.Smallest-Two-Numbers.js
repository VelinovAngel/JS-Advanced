function smallestTwoNumber(input) {
    input.sort((a, b) => a - b);
    let smallestTwoNumber = input.slice(0, 2);
    return smallestTwoNumber.join(' ');
}

console.log(smallestTwoNumber([30, 15, 50, 5]));
console.log(smallestTwoNumber([3, 0, 10, 4, 7, 3]));