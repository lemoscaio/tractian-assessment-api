import { Router } from "express"

import { loginUser, registerUser } from "@/src/controllers/userController"
import { validateSchema } from "@middlewares/validateSchema"
import { userSchema } from "@/src/schemas/userSchemas"

export const authRouter = Router()

authRouter.post("/sign-up", validateSchema(userSchema), registerUser)
authRouter.post("/sign-in", validateSchema(userSchema), loginUser)
