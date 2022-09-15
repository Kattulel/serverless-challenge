import { Funcionario } from "../entities/Funcionario"
import { FuncionarioRepository } from "../repositories/funcionario-repository";

export class UpdateFuncionario {

    constructor(private FuncionarioRepository: FuncionarioRepository) {}

    async execute(nome: string, idade: number, cargo: string, id:number): Promise<Funcionario> {
        const funcionario = new Funcionario(nome, idade, cargo, id)
        return await this.FuncionarioRepository.update(funcionario)
    }
}