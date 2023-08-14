import { Shape } from "./shapes.js"

export class Triangle extends Shape {

    constructor(shapeID, x, y, r){
        super(shapeID, x, y, r)
    }
    
}

Triangle.prototype.render = function() {
    return(`<${this.shapeID} points="150,50 50,175 250,175"`)
}

export const triangle = new Triangle('polygon', 150, 125, 50) 
export const triangleRenderSVGcode = triangle.render()