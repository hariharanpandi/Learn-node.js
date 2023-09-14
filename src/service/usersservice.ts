import { User } from "../models/usermodel.js";

export default class UserService {
    async getAllUsers() {
        return User.find();
    }
}