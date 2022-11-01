function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        falar(){
            console.log(`${this.nome} está falando.`)
        },
        comer(){
            console.log(`${this.nome} está comendo.`)
        },
        beber(){
            console.log(`${this.nome} está bebendo.`)
        }
    }
}

constp1 = criaPessoa('Luiz','Otávio')
console.log(p1)