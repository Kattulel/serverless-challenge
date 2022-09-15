import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { db } from "./database/db"
import { FuncionarioRepositorySql } from "./repositories/sql/funcionario-repository-sql";
import { CreateFuncionario } from "./use-cases/create-funcionario";
import { DeleteFuncionario } from "./use-cases/delete-funcionario";
import { FindFuncionario } from "./use-cases/find-funcionario";
import { UpdateFuncionario } from "./use-cases/update-funcionario";

const funcionarioRepository = new FuncionarioRepositorySql();
funcionarioRepository.initialize_table();

const createFuncionario = new CreateFuncionario(funcionarioRepository);
const updateFuncionario = new UpdateFuncionario(funcionarioRepository);
const deleteFuncionario = new DeleteFuncionario(funcionarioRepository);
const findFuncionario = new FindFuncionario(funcionarioRepository);

export const findOne = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = Number(event.pathParameters?.id)
    let funcionario = await findFuncionario.execute(id)
    return { statusCode: 200, body: JSON.stringify(funcionario)};
};

export const deleteOne = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const id = Number(event.pathParameters?.id)
    let funcionario = await deleteFuncionario.execute(id)
    return { statusCode: 200, body: JSON.stringify(funcionario)};
};

export const update = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const { nome, idade, cargo } = JSON.parse(event.body || "{}");
    const id = Number(event.pathParameters?.id);
    const funcionario = await updateFuncionario.execute(nome, idade, cargo, id)
    return { statusCode: 200, body: JSON.stringify(funcionario)};
};

export const create = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const { nome, idade, cargo } = JSON.parse(event.body || "{}");
    const funcionario = await createFuncionario.execute(nome, idade, cargo)
    return { statusCode: 200, body: JSON.stringify(funcionario)};
};