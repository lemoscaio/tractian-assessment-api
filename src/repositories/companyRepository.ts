import { Company } from "../models/Company"
import { User } from "../models/User"

export const companyRepository = { getAllUsers, findByName, register }

function getAllUsers(companyId: string) {
  return User.find({ company: companyId })
}

function findByName(name: string) {
  return Company.findOne({ name: name })
}

function register(name: string) {
  return Company.create({ name: name })
}
