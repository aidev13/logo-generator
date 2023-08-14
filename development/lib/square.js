import { Shape } from "./shapes.js"

export class Square extends Shape {

    constructor(shapeID, x, y, r, fillColor){
        super(shapeID, x, y, r, fillColor)
    }
    
}

Square.prototype.render = function() {
    return(`<${this.shapeID} x="${this.xAxis}" y="${this.yAxis}" width="100" height="100" `)
}

export const square = new Square('rect', 100, 75) 
export const squareRenderSVGcode = square.render()