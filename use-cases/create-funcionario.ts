import { Funcionario } from "../entities/Funcionario"
import { FuncionarioRepository } from "../repositories/funcionario-repository";

export class CreateFuncionario {

    constructor(private FuncionarioRepository: FuncionarioRepository) {}

    async execute(nome: string, idade: number, cargo: string): Promise<Funcionario> {
        const funcionario = new Funcionario(nome, idade, cargo, undefined)
        return await this.FuncionarioRepository.create(funcionario)
    }
}