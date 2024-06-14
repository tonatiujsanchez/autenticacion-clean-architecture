import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";


type HashFuntion = (password: string) => string
type CompareFuntion = (password: string, hashed: string) => boolean

export class AuthDataSourceImpl implements AuthDatasource {

    constructor(
        private readonly hassPassword: HashFuntion = BcryptAdapter.hash,
        private readonly comparePassword: CompareFuntion = BcryptAdapter.compare
    ) { }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        
        const { name, email, password } = registerUserDto

        try {

            // 1. verificar si el correo existe
            const emailExist = await UserModel.findOne({ email })

            if( emailExist ) throw CustomError.conflict('Email already exists')

                
            // 2. Hashear  el password
            const passwordHash = this.hassPassword(password)

                
            // 3. Crear Usuario y Guardar en la base de datos
            const user = await UserModel.create({
                name,
                email,
                password: passwordHash
            })
            
            await user.save()


            // 4. Mapear la respuesta a UserEntity y retornarlo
            return UserMapper.userEntityFromObject( user )
            
        } catch (error) {
            if( error instanceof CustomError ){
                throw error
            }

            throw CustomError.internalServer()

        }
    }

}