import { companyRepository } from "../repositories/companyRepository"
import { userRepository } from "../repositories/userRepository"
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils"

export async function getAllUsersOfCompany(companyId: string) {
  const users = await companyRepository.getAllUsers(companyId)

  return users
}

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
  const user = await userRepository.findByEmailPopulateCompany(userEmail)

  if (!user) {
    throw notFoundError("The provided user does not exists")
  }

  if (!user.company) {
    throw unauthorizedError(
      "You must be part of a company to add a user to it.",
    )
  }

  const userWithAddedCompany = await userRepository.addCompany(
    newUserEmail,
    user.company,
  )

  return userWithAddedCompany
}
