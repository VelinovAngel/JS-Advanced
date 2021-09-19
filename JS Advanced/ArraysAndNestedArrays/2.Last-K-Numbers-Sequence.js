function lastKNumbersSequence(firstNumber, secondNumber) {
    let n = parseInt(firstNumber);
    let k = parseInt(secondNumber);

    let arr = [];
    arr[0] = 1;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {
            sum += arr[j];
        }
        arr[i] = sum;
    }

    return arr;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));