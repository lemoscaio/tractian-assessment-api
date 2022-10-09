import { Router } from "express"

import { getAllCompanyUnits, registerUnit } from "../controllers/unitController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateToken } from "../middlewares/validateToken"
import { unitSchema } from "../schemas/unitSchemas"

export const unitRouter = Router()

unitRouter.get("/units", validateToken, getAllCompanyUnits)

unitRouter.post(
  "/units/create",
  validateToken,
  validateSchema(unitSchema),
  registerUnit,
)
