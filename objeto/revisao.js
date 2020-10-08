// coleção dinâmica de pares chave-valor
const produto = new Object
produto.nome = "Cadeira"
produto["Marca do produto"] = "Generica"
produto.preco = 220

console.log(produto)
delete produto["Marca do produto"]

console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "André",
        idade: 19,
        endereco: {
            logradouro: "...",
            numero: "123",
            CEP: "...",
            cidade: "..."
        },
    },
    condutores: [
    {
        nome: "André",
        idade: 19
    },
    {
        nome: "Beatriz",
        idade: 18
    }
    ], 
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Av GRANDE PRA CARAI"
console.log(carro)