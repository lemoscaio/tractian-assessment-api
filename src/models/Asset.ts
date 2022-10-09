import mongoose, { Schema } from "mongoose"

import { Asset as AssetInterface } from "@interfaces/assetInterfaces"

const AssetSchema = new mongoose.Schema<AssetInterface>(
  {
    image: { type: String, require: true, trim: true },
    name: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
    model: { type: String, require: true, trim: true },
    owner: { type: String, require: true, trim: true },
    status: {
      type: String,
      require: true,
      trim: true,
      enum: ["Running", "Alerting", "Stopped"],
    },
    healthLevel: { type: Number, require: true, min: 0, max: 100 },
    unit: { type: Schema.Types.ObjectId, ref: "Unit" },
  },
  { timestamps: true },
)

export const Asset = mongoose.model<AssetInterface>("Asset", AssetSchema)
