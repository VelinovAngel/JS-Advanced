function roadRadar(speed, area) {
    let motorwaySpeed = 130;
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residenceSpeed = 20;
    let difference = 0;
    let status = '';
    switch (area) {
        case 'motorway':
            if (speed <= motorwaySpeed) {
                console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`)
            }else{
                difference = speed - motorwaySpeed;
                if (difference <= 20) {
                    status = 'speeding';
                }else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${status}`)
            }
            break;
        case 'interstate':
            if (speed <= interstateSpeed) {
                console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`)
            }else{
                difference = speed - interstateSpeed;
                if (difference <= 20) {
                    status = 'speeding';
                }else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${status}`)
            }
            break;
        case 'city':
            if (speed <= citySpeed) {
                console.log(`Driving ${speed} km/h in a ${citySpeed} zone`)
            }else{
                difference = speed - citySpeed;
                if (difference <= 20) {
                    status = 'speeding';
                }else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${status}`)
            }
            break;
        case 'residential':
            if (speed <= residenceSpeed) {
                console.log(`Driving ${speed} km/h in a ${residenceSpeed} zone`)
            }else{
                difference = speed - residenceSpeed;
                if (difference <= 20) {
                    status = 'speeding';
                }else if (difference > 20 && difference <= 40 ){
                    status = 'excessive speeding';
                }else{
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residenceSpeed} - ${status}`)
            }
            break;
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')