export class Funcionario {
    id: number
    nome: string
    idade: number
    cargo: string

    constructor(nome: string, idade: number, cargo: string, id?: number) {
        if(id) {
            this.id = id
        }
        this.idade = idade;
        this.nome = nome;
        this.cargo = cargo;
    }
}