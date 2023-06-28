import "reflect-metadata"
import { startServer } from "./app";
import { AppDataSource } from "./config/typeorm";

async function main() {
    try {
        const app = await startServer();
        await AppDataSource.initialize()
        console.log("Database connceted")
        app.listen(3000)
        console.log('Server on port', 3000)
    } catch (error) {
        console.error(error)
    }

}

main();