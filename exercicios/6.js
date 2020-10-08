function jurosSimples (C, i, t) {
    J = C*i*t + C
    return console.log(`Montante final da aplicação após ${t} meses: ${J}`)}

function jurosCompostos (C, i, t) {
    let n = i +1
    J = C * Math.pow(n, t)
    return console.log(`Montante final da aplicação após ${t} meses: ${J}`)
}

jurosCompostos(2000, 0.0225, 3)
jurosSimples(2000, 0.0225, 3)