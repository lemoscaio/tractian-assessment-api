import mongoose, { Schema } from "mongoose"
import { User as UserInterface } from "../interfaces/userInterfaces"

const UserSchema = new mongoose.Schema<UserInterface>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: { type: String, require: true, trim: true, minLength: 6 },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true },
)

export const User = mongoose.model("User", UserSchema)
