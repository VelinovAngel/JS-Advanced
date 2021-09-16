// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from number


function cookingByNumber(number, first, second, third, fourth, fifth, sixth) {
    let arr = [first, second, third, fourth, fifth, sixth];
    let result = number;
    number = parseInt(number);
    let chop = function (n) {
        return n / 2;
    }
    let dice = function (n) {
        return Math.sqrt(n);
    }
    let spice = function (n) {
        return n + 1;
    }
    let bake = function (n) {
        return n * 3;
    }
    let fillet = function (n) {
        return n * 0.8;
    }
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                result = chop(result);
                console.log(result);
                break;
            case 'dice':
                result = dice(result);
                console.log(result);
                break;
            case 'spice':
                result = spice(result);
                console.log(result);
                break;
            case 'bake':
                result = bake(result);
                console.log(result);
                break;
            case 'fillet':
                result = fillet(result);
                console.log(result);
                break;
        }
    }
}

cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');