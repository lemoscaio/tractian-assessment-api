import { Types } from "mongoose"

export interface User {
  email: string
  password: string
  company: Types.ObjectId
}

export type CreateUserData = Omit<User, "company">
