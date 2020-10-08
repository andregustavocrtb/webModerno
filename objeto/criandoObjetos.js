// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto (nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco *(1 - desconto)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2999.99, 0.2)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase, 
        faltas,
        getSalario (){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
} 

const f1 = criarFuncionario('Beatriz', 12000, 5)
const f2 = criarFuncionario('João', 4000, 1)
const f3 = criarFuncionario('Maria', 7500, 3)
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// JSON.parse
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)