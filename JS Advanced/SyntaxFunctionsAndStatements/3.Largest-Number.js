function largestNumber(first, second, third) {
    let result;
    if (first > second && first > third) {
        result = first;
    } else if (second > first && second > third) {
        result = second;
    } else if (third > first && third > second) {
        result = third;
    }

    console.log(`The largest number is ${result}.`);
}

//Second solution:
function largestNumberBetween(first, second, third) {
    console.log(`The largest number is ${Math.max(first, second, third)}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);

largestNumberBetween(5, -3, 16);