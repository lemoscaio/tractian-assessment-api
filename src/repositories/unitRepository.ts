import { CreateCompanyData } from "../interfaces/companyInterfaces"
import { Unit } from "../models/Unit"

export const unitRepository = { findById, findByNameAndCompany, register }

function findById(unitId: string) {
  return Unit.findById(unitId)
}

function findByNameAndCompany(unitName: string, company: CreateCompanyData) {
  return Unit.findOne({ name: unitName, company: company })
}

function register(name: string, company: CreateCompanyData) {
  return Unit.create({ name: name, company: company })
}
