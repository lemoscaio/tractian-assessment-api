import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    company: { type: mongoose.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true },
)

export const User = mongoose.model("User", UserSchema)
