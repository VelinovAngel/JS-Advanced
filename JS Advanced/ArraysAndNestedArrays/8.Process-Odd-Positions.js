function processOddPositin(input){
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if(i % 2 != 0){
            result.push(input[i] * 2);
        }   
    }
    return result.reverse().join(' ');
}

console.log(processOddPositin([10, 15, 20, 25]));
console.log(processOddPositin([3, 0, 10, 4, 7, 3]));