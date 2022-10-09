import { Router } from "express"

import {
  deleteAsset,
  registerAsset,
  updateAsset,
} from "../controllers/assetController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateToken } from "../middlewares/validateToken"
import { assetSchema } from "../schemas/assetSchemas"

export const assetRouter = Router()

assetRouter.post(
  "/assets/create/:unitId",
  validateToken,
  validateSchema(assetSchema),
  registerAsset,
)

assetRouter.patch(
  "/assets/:assetId",
  validateToken,
  validateSchema(assetSchema),
  updateAsset,
)

assetRouter.delete("/assets/:assetId", validateToken, deleteAsset)
