export const nome = 'Bruno'
export const sobrenome = 'Stefano'
export const idade = 39

export function soma(x, y) {
    return x + y
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}