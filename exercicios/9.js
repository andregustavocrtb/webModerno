function arredonda(nota) {
    if(nota<38){
        return nota
    } else{
    let teste = nota%5
    if(teste >= 3){
        teste = nota + 5 - teste 
    } else {
        teste = nota
    }
    return teste
    }
}


function avalia(nota){
    if(nota < 40){
        return "O aluno foi reprovado"
    } else {
        return "O aluno foi aprovado"
    }
}

function passouOuNao(nota){
    let notaNova = arredonda(nota)
    return console.log(avalia(notaNova))
}

passouOuNao(38)
console.log(arredonda(38))
passouOuNao(28)
console.log(arredonda(28))
passouOuNao(70)
console.log(arredonda(70))
passouOuNao(84)
console.log(arredonda(84))