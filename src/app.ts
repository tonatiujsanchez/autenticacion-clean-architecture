import { envs } from "./config"
import { MongoDatabase } from "./data/mongodb"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"


(()=>{
    main()
})()



async function main() {

    // await db
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName  : envs.MONGO_DB_NAME,
    })

    // inicio de nuestro server
    const options = {
        port: envs.PORT,
        routes: AppRoutes.routes
    }
    
    new Server( options ).start()
}