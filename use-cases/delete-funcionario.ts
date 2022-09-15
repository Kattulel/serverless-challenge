import { Funcionario } from "../entities/Funcionario"
import { FuncionarioRepository } from "../repositories/funcionario-repository";

export class DeleteFuncionario {

    constructor(private FuncionarioRepository: FuncionarioRepository) {}

    async execute(id:number) {
        await this.FuncionarioRepository.delete(id);
    }
}