import { DataSource } from "typeorm";
import { Fighter } from "../entity/Fighter";
import { Event } from "../entity/Event";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'graphql-db',
    entities:[Fighter, Event],
    synchronize: true
})