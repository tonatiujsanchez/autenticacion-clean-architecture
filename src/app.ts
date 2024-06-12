import { envs } from "./config"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"


(()=>{
    main()
})()



async function main() {

    // await db


    // inicio de nuestro server
    const options = {
        port: envs.port,
        routes: AppRoutes.routes
    }
    
    new Server( options ).start()
}