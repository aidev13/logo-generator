import { Shape } from "./shapes.js"

export class Circle extends Shape {

    constructor(shapeID, x, y, r, fillColor){
        super(shapeID, x, y, r, fillColor)
    }
    
}

Circle.prototype.render = function() {
    return(`<${this.shapeID} cx="${this.xAxis}" cy="${this.yAxis}" r="${this.radius}" `)
}

export const circle = new Circle('circle', 150, 125, 50) 
export const circleRenderSVGcode = circle.render()
