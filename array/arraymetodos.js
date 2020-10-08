const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro (remove o último elemento)
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() //Vettel quebrou o carro (remove o primeiro elemento)
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover elementos
pilotos.splice(3, 1) //Massa quebrou
console.log(pilotos)

const AlgunsPilotos1 = pilotos.slice(2) //gera um novo array
console.log(AlgunsPilotos1)

const AlgunsPilotos2 = pilotos.slice(1, 4)
console.log(AlgunsPilotos2)
