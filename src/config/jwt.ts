import jwt from 'jsonwebtoken'
import { envs } from './envs'

export class JwtAdapter {
    static async generateToken(payload: Object, duration:string = '2h'):Promise<string | null> {

        // FIXME: Generate JWT
        return new Promise(( resolve )=>{
            jwt.sign( payload, envs.SEED_JWT, { expiresIn: duration }, (error, token)=>{

                if( error ) return resolve(null) 

                resolve(token!)
            })
        })
    }
}

