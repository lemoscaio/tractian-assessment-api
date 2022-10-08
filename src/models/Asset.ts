import mongoose from "mongoose"

const AssetSchema = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  model: String,
  owner: String,
  status: String,
  healthLevel: Number,
})

export const Asset = mongoose.model("Asset", AssetSchema)
