import { Company } from "../models/Company"

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
