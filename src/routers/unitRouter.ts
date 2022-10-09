import { Router } from "express"

import { registerUnit } from "../controllers/unitController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateToken } from "../middlewares/validateToken"
import { unitSchema } from "../schemas/unitSchemas"

export const unitRouter = Router()

unitRouter.post(
  "/units/create",
  validateToken,
  validateSchema(unitSchema),
  registerUnit,
)
