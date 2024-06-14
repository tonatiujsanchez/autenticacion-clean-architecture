import { CustomError, UserEntity } from "../../domain";


export class UserMapper {

    static userEntityFromObject( object: { [kay: string]: any } ) {

        const { id, _id, name, email, password, roles, img } = object

        if( !_id || !id ) throw CustomError.badRequest('Missing id')
    
        if( !name ) throw CustomError.badRequest('Missing name')
    
        if( !email ) throw CustomError.badRequest('Missing email')

        if( !roles ) throw CustomError.badRequest('Missing roles')
        

        return new UserEntity(
            _id || id,
            name,
            email,
            password,
            roles,
            img
        )
    }
}