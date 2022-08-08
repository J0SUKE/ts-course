interface Bird {
    fly:()=>void
}
interface Fish {
    swim:()=>void
}
interface Human {
    swim?:()=>void,
    fly?:()=>void
}

function move(animal : Bird | Fish | Human ) {
    if ("swim" in animal && animal.swim ) {
        return animal.swim()
    }
    //return animal.fly();
}

