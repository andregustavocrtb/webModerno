function fatorial (num) {
    let fac = 1
    let n = num
    if(num > 0){
        while(n != 1){
            fac = fac*n
            n = n-1
    }
    return console.log(`${num}! = ${fac}`)
}
    else{
        return console.log("Esse numero é negativo")
    }
}

fatorial(5)
fatorial(-1)
fatorial(4)
fatorial(36)