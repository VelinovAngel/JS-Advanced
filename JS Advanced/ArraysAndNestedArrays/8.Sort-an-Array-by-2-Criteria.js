function sortArrayByTwoCriteria(input) {
    let newArr = input.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    })
    return newArr.join('\r\n');
}

console.log(sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']));