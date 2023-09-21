import UserService from "../service/usersservice";
import { Request, Response } from "express";

const userService = new UserService();

export default class UserController {
    async getAllUsers(req: Request, res: Response) {
        console.log('users')
        const users = await userService.getAllUsers();
        res.send(users);
    }
}