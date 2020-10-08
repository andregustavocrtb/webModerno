function pessoa(nome){
    this.nome = nome,
    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const p1 = new pessoa('Beatriz')
p1.falar()