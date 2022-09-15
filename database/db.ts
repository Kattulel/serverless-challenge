import { Sequelize } from 'sequelize'

export const db = new Sequelize(
    "serverless",
    "serverless",
    "serverless",
    {
        dialect: "postgres",
        host: process.env.PG_HOST,
    }
);