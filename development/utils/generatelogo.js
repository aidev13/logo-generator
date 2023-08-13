export const getSVG = (response) => {
    const { charc, txtColor, shape, shapeColor } = response
  
    return `
    <svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    
    ${shape}

    <text x="150" y="125" alignment-baseline="middle" text-anchor="middle" font-size="55" fill="${txtColor}">${charc}</text>

</svg>
    
    `
  }