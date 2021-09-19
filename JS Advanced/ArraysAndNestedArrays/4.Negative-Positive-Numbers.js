function negativePositiveNumbers(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            arr.unshift(input[i]);
        } else {
            arr.push(input[i]);
        }
    }

    for (const index of arr) {
        console.log(index);
    }
    fo
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);