import { Funcionario } from "../entities/Funcionario"

export interface FuncionarioRepository {
    create(funcionario: Funcionario): Promise<Funcionario>
    update(funcionario: Funcionario): Promise<Funcionario>
    delete(id: number): Promise<void>
    find(id: number): Promise<Funcionario|null>
}