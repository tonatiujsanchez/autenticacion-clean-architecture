import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepositoryImpl, AuthDataSourceImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";



export class AuthRoutes {

    static get routes():Router {

        const router = Router()

        const datasource = new AuthDataSourceImpl()
        const AuthRepository = new AuthRepositoryImpl( datasource )
        const authController = new AuthController( AuthRepository )

        // define all principal routes
        router.post('/login', authController.loginUser)
        router.post('/register', authController.registerUser)

        router.get('/', AuthMiddleware.validateJWT, authController.getUsers)

        return router
    }

}