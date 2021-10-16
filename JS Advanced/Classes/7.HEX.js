class Hex {
   
    constructor(number){
        this.value = Number(number);
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }

    plus(number){
        let result = (this.value + Number(number.valueOf()));
        return new Hex(result);
    }

    minus(number){
        let result = (this.value - Number(number.valueOf()));
        return new Hex(result);
    }

    parse(text){
        return parseInt(text, 16);
    }
}



let a = new Hex(10);
let b = new Hex(5);

let act3 = a.minus(b).toString();
let exp3 = "0x5";

console.log(act3 === exp3)




