import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

require('dotenv').config()
const {USER_NAME,PASSWORD,DBNAME} = process.env

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "" + `mongodb+srv://${USER_NAME}:${PASSWORD}@${DBNAME}.izhqqbu.mongodb.net/`+ "",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})