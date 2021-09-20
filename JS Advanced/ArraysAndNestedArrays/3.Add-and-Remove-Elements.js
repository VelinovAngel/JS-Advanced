function addAndRemoveElement(arr){
    let number = 1;
    let result = [];
    for (const command of arr) {
        if(command == 'add'){
            result.push(number);
            number++;
        }else{
            result.pop();
            number++;
        }
    }
    if(result.length > 0){

        return result.join('\r\n');
    }else{
        return 'Empty';
    }
}

console.log(addAndRemoveElement(['remove', 
'remove', 
'remove']
));


console.log(addAndRemoveElement(['add', 
'add', 
'add', 
'add']
));

console.log(addAndRemoveElement(['add', 
'add', 
'remove', 
'add', 
'add']
));