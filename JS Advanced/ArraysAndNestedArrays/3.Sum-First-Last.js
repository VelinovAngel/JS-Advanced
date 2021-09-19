function sumFirstLast(input) {
    let arr = input;
    let sum = 0;
    if(arr.length <= 1){
        sum += parseInt(arr[0]);
    }else{
        sum += (parseInt(arr[0]) + parseInt(arr[arr.length - 1]));
    }
    return sum;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
console.log(sumFirstLast(['20']));
console.log(sumFirstLast(['20', '30']));