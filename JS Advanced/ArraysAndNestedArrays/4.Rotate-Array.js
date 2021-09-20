function rotateArray(array, number){
    for (let i = 0; i < number; i++) {
        let currElement = array.pop();
        array.unshift(currElement);    
    }
    return array.join(' ');
}

console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));