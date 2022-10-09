import { unitRepository } from "../repositories/unitRepository"
import { userRepository } from "../repositories/userRepository"
import { conflictError } from "../utils/errorUtils"

export async function registerUnit(userEmail: string, unitName: string) {
  const user = await userRepository.findByEmail(userEmail)

  const unitExists = await unitRepository.findByNameAndCompany(
    unitName,
    user.company,
  )

  if (unitExists?.company.toString() === user.company.toString()) {
    throw conflictError("This company already has an unit with that name.")
  }

  const createdUnit = await unitRepository.register(unitName, user.company)

  return createdUnit
}
