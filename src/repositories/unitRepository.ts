import { Types } from "mongoose"
import { CreateCompanyData } from "../interfaces/companyInterfaces"
import { Unit } from "../models/Unit"

export const unitRepository = {
  findById,
  findByNameAndCompany,
  findByCompanyId,
  register,
}

function findById(unitId: string) {
  return Unit.findById(unitId)
}

function findByNameAndCompany(unitName: string, company: Types.ObjectId) {
  return Unit.findOne({ name: unitName, company: company })
}

function findByCompanyId(companyId: Types.ObjectId) {
  return Unit.find({ company: companyId })
}

function register(name: string, company: Types.ObjectId) {
  return Unit.create({ name: name, company: company })
}
