let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function analise(str) {
    let pontuacoes = str.split(", ")
    let quebraDeRecords = 0
    let pior = 1
    let pontuacaoMinima = pontuacoes[0]
    let pontuacaoMaxima = pontuacoes[0]

    for(let i = 1; i < pontuacoes.lenght; i++){
        if(pontuacoes[i] > pontuacaoMaxima){
            pontuacaoMaxima = pontuacoes[i]
            quebraDeRecords++
        }else if(pontuacoes[i] < pontuacaoMinima){
            pontuacaoMinima = pontuacoes[i]
            pior = i + 1
        }
    }
    return [quebraDeRecords, pior]
}
    
console.log(analise(stringPontuacoes))

let StringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(StringPontuacoes))