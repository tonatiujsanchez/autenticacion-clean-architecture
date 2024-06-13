import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";


export class AuthDataSourceImpl implements AuthDatasource {
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        
        const { name, email, password } = registerUserDto

        try {

            // 1. verificar si el correo existe

            // 2. Hashear  el password

            // 3. Mapear la respuesta a UserEntity
            
            // 4. Guardar el usuario en la base de datos

            // 5. Retornar UserEntity

            return new UserEntity(
                '1',
                name,
                email,
                password,
                ['ADMIN_ROLE'],
                'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            )
            
        } catch (error) {
            if( error instanceof CustomError ){
                throw error
            }

            throw CustomError.internalServer()

        }

    }

}