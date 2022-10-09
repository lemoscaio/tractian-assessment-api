import { Types } from "mongoose"

export interface Asset {
  image: string
  name: string
  description: string
  model: string
  owner: string
  status: "Running" | "Alerting" | "Stopped"
  healthLevel: number
  unit: Types.ObjectId
}

export type CreateAssetData = Omit<Asset, "unit">
