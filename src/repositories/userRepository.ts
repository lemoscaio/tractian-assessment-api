import { CreateUserData } from "../interfaces/userInterfaces"
import { User } from "../models/User"

export const userRepository = {
  findByEmail,
  register,
  addCompany,
}

function findByEmail(email: string) {
  return User.findOne({ email: email })
}

function register({ email, password }: CreateUserData) {
  return User.create({ email: email, password: password })
}

function addCompany(email: string, company) {
  return User.findOneAndUpdate(
    { email: email },
    { company: company },
    { new: true },
  )
}
