import { Router } from "express";
import { registerUserController } from '../controllers/user.controller.js'
import { loginController } from '../controllers/user.controller.js'
import { logoutController } from "../controllers/user.controller.js";
const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/login',loginController)
userRouter.get('/logout',logoutController)

export default userRouter
