import { circleRenderSVGcode } from "../lib/circle.js"
import { squareRenderSVGcode } from "../lib/square.js"
import { triangleRenderSVGcode } from "../lib/triangle.js"

export const render = (response) => {


    let { charc, txtColor, shape, shapeColor, x, y, r } = response
    let xml

    if (shape === 'circle') {
        xml = circleRenderSVGcode;
    }
    else if (shape === 'triangle') {
        xml = triangleRenderSVGcode;
    } else if (shape === 'square') {
        xml = squareRenderSVGcode;
    }

    return `
    <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    
    ${xml} fill="${shapeColor}"/>  
   

    <text x="150" y="125" alignment-baseline="middle" text-anchor="middle" font-size="55" fill="${txtColor}">${charc}</text>

</svg>
    
    `
}