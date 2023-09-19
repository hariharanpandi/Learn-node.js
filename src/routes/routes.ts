import express from "express";
import UserController from "../controller/userscontroller";

const userController = new UserController();
const router = express.Router();

router.get('/users', userController.getAllUsers);

export default router;