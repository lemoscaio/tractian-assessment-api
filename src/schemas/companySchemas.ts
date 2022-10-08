import Joi from "joi"

import { CreateCompanyData } from "src/interfaces/companyInterfaces"

export const companySchema = Joi.object<CreateCompanyData>({
  name: Joi.string().required(),
})
