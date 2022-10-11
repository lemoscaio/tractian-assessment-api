import { Router } from "express"
import { getUserInfo } from "../controllers/userControllers"

import { validateToken } from "../middlewares/validateToken"

export const userRouter = Router()

userRouter.get("/user", validateToken, getUserInfo)
