function isBird(pet) {
    return pet.fly !== undefined;
}
function move(animal) {
    if ("swim" in animal && animal.swim) {
        return animal.swim();
    }
    if ("fly" in animal && animal.fly) {
        return animal.fly();
    }
}
function giveFluFunction(pet) {
    if (isBird(pet)) {
        pet.fly();
    }
}
var flappy = {
    fly: function () { return console.log('i\'am flying !'); }
};
giveFluFunction(flappy);
