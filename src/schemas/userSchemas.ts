import Joi from "joi"

import { CreateUserData } from "src/interfaces/userInterfaces"

export const userSchema = Joi.object<CreateUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(20).required(),
})

export const addUserToCompanySchema = Joi.object<CreateUserData>({
  email: Joi.string().email().required(),
})
