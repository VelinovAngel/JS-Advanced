function listOfName(input) {
    let newArr = input.sort((a,b) => a.localeCompare(b));
    for (let i = 0; i < newArr.length; i++) {
        console.log(`${i + 1}.${newArr[i]}`);
    }
}


listOfName(["John", "Bob", "Christina", "Ema"]);
listOfName([""]);