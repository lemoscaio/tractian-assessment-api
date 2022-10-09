import { CreateCompanyData } from "../interfaces/companyInterfaces"
import { CreateUserData } from "../interfaces/userInterfaces"
import { User } from "../models/User"

export const userRepository = {
  findByEmail,
  findByEmailPopulateCompany,
  register,
  addCompany,
}

function findByEmail(email: string) {
  return User.findOne({ email: email })
}

function findByEmailPopulateCompany(email: string) {
  return User.findOne({ email: email }).populate("company")
}

function register({ email, password }: CreateUserData) {
  return User.create({ email: email, password: password })
}

function addCompany(email: string, company: CreateCompanyData) {
  return User.findOneAndUpdate(
    { email: email },
    { company: company },
    { new: true },
  )
}
