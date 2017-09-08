///<reference path="IShape.ts"/>
///<reference path="Circle.ts"/>
///<reference path="Triangle.ts"/>
/*function created using interface and class*/
function drawAllShape(shape:Drawing.IShape)
{
    shape.draw()
}
/*using the function to call another file methods*/
drawAllShape(new Drawing.Circle())
drawAllShape(new Drawing.Triangle())
