function ExtractIncreasingSubsequence(input){
    let previusElement = 0;
    let currentElement;
    let newSequence = [];
    for(let i = 0; i < input.length; i++){
        currentElement = input[i];
        if(parseInt(previusElement) > parseInt(currentElement)){
            previusElement = currentElement;
            continue;
        }else{
           
            previusElement = currentElement;
            if(newSequence.some(x=> x > currentElement)){
                continue;
            }
            newSequence.push(currentElement);
        }
    }
    return newSequence;
}

console.log(ExtractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(ExtractIncreasingSubsequence([1, 2, 3, 4]));
console.log(ExtractIncreasingSubsequence([20, 3, 2, 15, 6, 1]));