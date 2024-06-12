import { Router } from "express";
import { AuthController } from "./controller";



export class AuthRoutes {

    static get routes():Router {

        const router = Router()
        const authController = new AuthController()

        // define all principal routes
        router.post('/login', authController.loginUser)
        router.post('/register', authController.registerUser)

        return router
    }

}