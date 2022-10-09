import Joi from "joi"

import { CreateAssetData } from "../interfaces/assetInterfaces"

export const assetSchema = Joi.object<CreateAssetData>({
  image: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  model: Joi.string().required(),
  owner: Joi.string().required(),
  status: Joi.string().required().valid("Running", "Alerting", "Stopped"),
  healthLevel: Joi.number().required().min(0).max(100),
})
