import { Funcionario } from "../../entities/Funcionario";
import { FuncionarioRepository } from "../funcionario-repository";
import { db } from "../../database/db"
import { FuncionarioModel } from "../../database/models/FuncionarioModel";
import { convertFuncionarioModelToObject } from "../../util/funcionarioModelToObject";


export class FuncionarioRepositorySql implements FuncionarioRepository {

    async initialize_table() {
        await FuncionarioModel.sync()
    }

    async create(funcionario: Funcionario): Promise<Funcionario> {
        const {nome, idade, cargo} = funcionario;
        console.log(funcionario)
        const model = await FuncionarioModel.create({ nome, idade, cargo })
        return convertFuncionarioModelToObject(model);
    }
    
    async update(funcionario: Funcionario): Promise<Funcionario> {
        const {nome, idade, cargo, id} = funcionario;
        const model = await FuncionarioModel.update({ nome, idade, cargo }, { where: {id: id}} )
        return funcionario;
    }

    async delete(id: number): Promise<void> {
        const model = await FuncionarioModel.destroy({ where: {id: id}})
    }
    
    async find(id: number): Promise<Funcionario | null> {
        const model = await FuncionarioModel.findByPk(id)
        if (model) {
            return convertFuncionarioModelToObject(model);
        }
        return null
    }

}