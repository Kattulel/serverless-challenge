import Sequelize from 'sequelize';
import { db } from "../db"

export const FuncionarioModel = db.define("funcionario", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});