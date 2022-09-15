import { Funcionario } from "../entities/Funcionario"
import { FuncionarioModel } from "../database/models/FuncionarioModel"

export const convertFuncionarioModelToObject = (model) => {
    return new Funcionario(
        model.getDataValue("nome"), 
        model.getDataValue("idade"), 
        model.getDataValue("cargo"),
        model.getDataValue("id"),
    );
}