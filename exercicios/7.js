function bhaskara (ax2, bx, c) {
    delta = Math.pow(bx, 2) -4*ax2*c
    if(delta < 0){
        return console.log("Delta é negativo")
    }
    else{
        x1 = (-bx + Math.sqrt(delta))/(2*ax2)
        x2 = (-bx - Math.sqrt(delta))/(2*ax2)
        return [x1, x2]
    }
}

console.log(bhaskara(1,0,0))
console.log(bhaskara(1,-1,-6))
console.log(bhaskara(-0.25,0,361))
console.log(bhaskara(1,0,-144))