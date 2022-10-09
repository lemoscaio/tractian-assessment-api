import { Request, Response } from "express"

import * as unitService from "@services/unitService"

export async function getAllCompanyUnits(req: Request, res: Response) {
  const { email: userEmail }: { email: string } = res.locals.user

  const units = await unitService.getAllUnits(userEmail)

  res.send(units)
}

export async function registerUnit(req: Request, res: Response) {
  const { name }: { name: string } = req.body
  const { email: userEmail }: { email: string } = res.locals.user

  const createdUnit = await unitService.registerUnit(userEmail, name)

  res.status(201).send(createdUnit)
}
