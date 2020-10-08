function arrumaDinheiro (nume) {
    numeroArrumado = nume.toFixed(2)
    return console.log(`R$ ${numeroArrumado}`)
}

let num = 0.1+0.2
arrumaDinheiro(num)