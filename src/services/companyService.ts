import { companyRepository } from "../repositories/companyRepository"
import { userRepository } from "../repositories/userRepository"
import { conflictError } from "../utils/errorUtils"

export async function registerCompany(userEmail: string, name: string) {
  const companyExists = await companyRepository.findByName(name)
  const userHasCompany = await userRepository.findByEmail(userEmail)

  if (userHasCompany.company) {
    throw conflictError("This user already has a company.")
  }

  if (companyExists)
    throw conflictError("A company with that name already exists!")

  const createdCompany = await companyRepository.register(name)
  const userWithAddedCompany = await userRepository.addCompany(
    userEmail,
    createdCompany,
  )

  return userWithAddedCompany
}

export async function addUserToCompany(
  userEmail: string,
  newUserEmail: string,
) {
  const userHasCompany = await userRepository.findByEmail(userEmail)

  if (!userHasCompany.company) {
    throw conflictError("You must be part of a company to add a user to it.")
  }

  //TODO verify if user exists

  const userWithAddedCompany = await userRepository.addCompany(
    newUserEmail,
    userHasCompany.company,
  )

  return userWithAddedCompany
}
