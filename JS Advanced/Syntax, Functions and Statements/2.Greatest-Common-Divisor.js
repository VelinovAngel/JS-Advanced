function gcm(a, b) {
    while (b > 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcm(15, 5));
console.log(gcm(2154, 458));