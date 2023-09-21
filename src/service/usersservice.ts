import UsersSchema from "../models/usermodel";
import connectToDB from "../database/mysql";
export default class UserService {
    async registerUser() {
        return await connectToDB.query('SELECT * FROM users');
    }

    async getAllUsers() {
        return UsersSchema.create({
            first_name: 'Hariharan',
            last_name: 'Pandi',
            email: 'hariharan@aaludra.com',
        });
    }
}