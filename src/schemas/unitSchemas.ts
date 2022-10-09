import Joi from "joi"

import { CreateUnitData } from "src/interfaces/unitInterfaces"

export const unitSchema = Joi.object<CreateUnitData>({
  name: Joi.string().required(),
})
