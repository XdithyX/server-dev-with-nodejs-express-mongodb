var rect= {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solverect(l,b)
{
    console.log("perimeter is "+ rect.perimeter(l,b));
     console.log("area is"+ rect.area(l,b));
}

solverect(2,4);