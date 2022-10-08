import mongoose from "mongoose"
import { User } from "./User"

const CompanySchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true },
)

export const Company = mongoose.model("Company", CompanySchema)
