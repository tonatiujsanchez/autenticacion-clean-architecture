import { Request, Response } from "express"


export class AuthController {
    
    constructor() {

    }

    registerUser = (req:Request, res:Response) => { 
        res.json({msg:'registerUser controller '})

    }

    loginUser = (req:Request, res:Response) => {
        res.json({msg:'loginUser controller '})
    }
}