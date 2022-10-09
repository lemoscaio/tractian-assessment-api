import { Types } from "mongoose"

export interface Unit {
  name: string
  company: Types.ObjectId
}

export type CreateUnitData = Omit<Unit, "company">
