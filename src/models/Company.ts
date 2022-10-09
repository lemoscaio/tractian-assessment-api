import mongoose from "mongoose"
import { CreateCompanyData } from "../interfaces/companyInterfaces"

const CompanySchema = new mongoose.Schema<CreateCompanyData>(
  {
    name: { type: String, required: true, trim: true, unique: true },
  },
  { timestamps: true },
)

export const Company = mongoose.model("Company", CompanySchema)
