function calcolation(fruit, weight, money){
    let weightToKg = weight/1000;
    console.log(`I need $${(weightToKg*money).toFixed(2)} to buy ${weightToKg.toFixed(2)} kilograms ${fruit}.`);
}

calcolation('orange', 2500, 1.80);
calcolation('apple', 1563, 2.35);