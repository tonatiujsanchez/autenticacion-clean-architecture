
import { compareSync, hashSync } from "bcryptjs";

export class BcryptAdapter {

    static hash(password: string): string {
    
        const saltRounds = 10;
        return hashSync(password, saltRounds);
    }


    static compare(password: string, hashed: string): boolean {
        
        return compareSync(password, hashed)
    }
}





