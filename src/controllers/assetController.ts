import { Request, Response } from "express"

import * as assetService from "@services/assetService"

export async function registerAsset(req: Request, res: Response) {
  const { email: userEmail }: { email: string } = res.locals.user
  const { unitId } = req.params

  const createdAsset = await assetService.registerAsset(
    userEmail,
    unitId,
    req.body,
  )

  res.status(201).send(createdAsset)
}

export async function updateAsset(req: Request, res: Response) {
  const { email: userEmail }: { email: string } = res.locals.user
  const { assetId } = req.params

  const updatedAsset = await assetService.updateAsset(
    userEmail,
    assetId,
    req.body,
  )

  res.status(200).send(updatedAsset)
}

export async function deleteAsset(req: Request, res: Response) {
  const { email: userEmail }: { email: string } = res.locals.user
  const { assetId } = req.params

  const deletedContent = await assetService.deleteAsset(userEmail, assetId)

  res.status(204).send(deletedContent)
}
