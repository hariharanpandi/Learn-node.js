import UsersSchema from "../models/usermodel";

export default class UserService {
    async getAllUsers() {
        return UsersSchema.findAll();
    }

    async registerUser() {
        return UsersSchema.create({
            first_name: 'Hariharan',
            last_name: 'Pandi',
            email: 'hariharan@aaludra.com',
        });
    }
}