function constructorCrew(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += ((Number(obj.weight) * Number(obj.experience) * 0.1));
        obj.dizziness = false;
    }
    return obj;
}

console.log(constructorCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));

console.log(constructorCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
));