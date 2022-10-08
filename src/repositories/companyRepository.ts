import { CreateUserData } from "../interfaces/userInterfaces"
import { Company } from "../models/Company"
import { User } from "../models/User"

export const companyRepository = {
  findByName,
  register,
}

function findByName(name: string) {
  return Company.findOne({ name: name })
}

function register(name: string) {
  return Company.create({ name: name })
}
