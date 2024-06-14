import jwt from 'jsonwebtoken'
import { envs } from './envs'


const SEED_JWT = envs.SEED_JWT

export class JwtAdapter {

    static verifyToken<T>(token: string):Promise<T | null> {
    
        return new Promise(( resolve )=>{

            jwt.verify( token, SEED_JWT, (error, decoded)=>{
                if( error ) return resolve(null)

                resolve(decoded as T)
            })
        })
    }

    static async generateToken(payload: Object, duration:string = '2h'):Promise<string | null> {

        return new Promise(( resolve )=>{
            jwt.sign( payload, SEED_JWT, { expiresIn: duration }, (error, token)=>{

                if( error ) return resolve(null) 

                resolve(token!)
            })
        })
    }
}

