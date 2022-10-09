import { Router } from "express"

import {
  addUserToCompany,
  registerCompany,
} from "@/src/controllers/companyController"
import { validateSchema } from "@middlewares/validateSchema"
import { validateToken } from "../middlewares/validateToken"
import { companySchema } from "../schemas/companySchemas"
import { addUserToCompanySchema } from "../schemas/userSchemas"

export const companyRouter = Router()

companyRouter.post(
  "/companies/create",
  validateToken,
  validateSchema(companySchema),
  registerCompany,
)

companyRouter.patch(
  "/companies/addUser",
  validateToken,
  validateSchema(addUserToCompanySchema),
  addUserToCompany,
)
