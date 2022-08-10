interface Circle
{
    kind:'circle',
    radius:number,
}
interface Square
{
    kind:'square',
    sideLength:number
}

type Shape = Circle | Square;

function handleShape(shape:Shape) {
    if (shape.kind=='square') {
        return  shape.sideLength*2;
    }
    if (shape.kind=='circle') {
        return  shape.radius*2;
    }
    shape
}