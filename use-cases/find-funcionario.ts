import { Funcionario } from "../entities/Funcionario"
import { FuncionarioRepository } from "../repositories/funcionario-repository";

export class FindFuncionario {

    constructor(private FuncionarioRepository: FuncionarioRepository) {}

    async execute(id:number): Promise<Funcionario | null> {
        return await this.FuncionarioRepository.find(id);
    }
}