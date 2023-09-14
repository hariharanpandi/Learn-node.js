import UserService from "../service/usersservice.js";
import { Request, Response } from "express";

const userService = new UserService();

export default class UserController {
    async getAllUsers(req: Request, res: Response) {
        const users = await userService.getAllUsers();
        res.send(users);
    }
}