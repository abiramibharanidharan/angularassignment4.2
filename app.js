///<reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("The Circle is Drawn");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
///<reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    var Triangle = (function () {
        function Triangle() {
        }
        Triangle.prototype.draw = function () {
            console.log("The Triangle is Drawn");
        };
        return Triangle;
    }());
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
///<reference path="IShape.ts"/>
///<reference path="Circle.ts"/>
///<reference path="Triangle.ts"/>
/*function created using interface and class*/
function drawAllShape(shape) {
    shape.draw();
}
/*using the function to call another file methods*/
drawAllShape(new Drawing.Circle());
drawAllShape(new Drawing.Triangle());
