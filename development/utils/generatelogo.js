import { circleRenderSVGcode } from "../lib/circle.js"
import { squareRenderSVGcode } from "../lib/square.js"
import { triangleRenderSVGcode } from "../lib/triangle.js"

export const getSVG = (response) => {


    let { charc, txtColor, shape, shapeColor, x, y, r } = response
    const usersShape = `${response.shape}`
    if (usersShape === 'circle') {
        shape = circleRenderSVGcode;
    }
     else if (usersShape === 'triangle') {
        shape = triangleRenderSVGcode;
    } else if (usersShape === 'square'){
        shape = squareRenderSVGcode;
    }

    return `
    <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    
    ${shape} fill="${shapeColor}"/>  
   

    <text x="150" y="125" alignment-baseline="middle" text-anchor="middle" font-size="55" fill="${txtColor}">${charc}</text>

</svg>
    
    `
}