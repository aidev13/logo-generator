import { Shape } from "./shapes.js"

export class Circle extends Shape {
    constructor(shapeID, x, y, r){
        super(shapeID, x, y, r)
    }
    
}

Circle.prototype.render = function() {
    return(`<${this.shapeID} cx="${this.xAxis}" cy="${this.yAxis}" r="${this.radius}" />`)
}

const circle = new Circle('circle', 150, 122, 50) 
console.log(circle.render())
