function testarTriangulo(a,b,c) {
    if(a === b && a === c){
        return console.log("Esse triângulo é equilatero")
    } else if(a === b && b !== c) {
        return console.log("Esse triângulo é isósceles")
    } else if(b === c && a !== c) {
        return console.log("Esse triângulo é isósceles")
    } else if(a === c && b !== a) {
        return console.log("Esse triângulo é isósceles")
    } else {
        return console.log("Esse triângulo é escaleno")
    }
}

testarTriangulo(2,2,2)
testarTriangulo(1,1,2)
testarTriangulo(1,2,1)
testarTriangulo(2,1,1)
testarTriangulo(1,3,2)