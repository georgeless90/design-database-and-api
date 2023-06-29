import { DataSource } from "typeorm";
import { Fighter } from "../entity/Fighter";
import { Event } from "../entity/Event";
import { Fight } from "../entity/Fight";
import { Ranking } from "../entity/Ranking";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'graphql-db',
    entities:[Fighter, Event, Fight, Ranking],
    synchronize: true
})