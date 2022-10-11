import jwt from "jsonwebtoken"

import { userRepository } from "@repositories/userRepository"
import { encrypt } from "@utils/encryptFunctions"
import { conflictError, unauthorizedError } from "@utils/errorUtils"
import { CreateUserData } from "src/interfaces/userInterfaces"

export async function getUserInfo(email: string) {
  const user = await userRepository.findByEmailPopulateCompany(email)

  delete user["_doc"].password

  return user
}

export async function registerUser({ email, password }: CreateUserData) {
  const userExists = await userRepository.findByEmail(email)
  if (userExists) throw conflictError("This e-mail is already registered!")
  const hashPassword = encrypt.bcrypt.encryptPassword(password)
  const createdUser = await userRepository.register({
    email,
    password: hashPassword,
  })
  return createdUser
}

export async function loginUser({ email, password }: CreateUserData) {
  const foundUser = await userRepository.findByEmail(email)

  const JWT_TOKEN = process.env.JWT_TOKEN

  const passwordMatch = encrypt.bcrypt.decryptPasswordAndCompare(
    password,
    foundUser?.password,
  )

  if (!foundUser || !passwordMatch)
    throw unauthorizedError("Wrong e-mail or password.")

  const token = jwt.sign({ email: foundUser.email }, JWT_TOKEN)

  return token
}
