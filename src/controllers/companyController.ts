import { Request, Response } from "express"

import * as companyService from "@services/companyService"

export async function registerCompany(req: Request, res: Response) {
  const { name }: { name: string } = req.body
  const { email: userEmail } = res.locals.user

  const createdCompany = await companyService.registerCompany(userEmail, name)

  res.status(201).send(createdCompany)
}

export async function addUserToCompany(req: Request, res: Response) {
  const { email: userEmail } = res.locals.user
  const { email: newUserEmail }: { email: string } = req.body

  const createdCompany = await companyService.addUserToCompany(
    userEmail,
    newUserEmail,
  )

  res.status(201).send(createdCompany)
}
