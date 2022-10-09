import mongoose, { Schema } from "mongoose"
import { Unit as UnitInterface } from "../interfaces/unitInterfaces"

const UnitSchema = new mongoose.Schema<UnitInterface>(
  {
    name: { type: String, required: true, trim: true },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true },
)

export const Unit = mongoose.model("Unit", UnitSchema)
