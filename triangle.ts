///<reference path="IShape.ts"/>
namespace Drawing
{
    export class Triangle implements IShape
    {
          public draw()
          {
              console.log("The Triangle is Drawn")
          }
    }
}