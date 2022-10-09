import { CreateAssetData } from "../interfaces/assetInterfaces"
import { Unit } from "../interfaces/unitInterfaces"
import { Asset } from "../models/Asset"

export const assetRepository = {
  findById,
  register,
  remove,
}

function findById(assetId: string) {
  return Asset.findById(assetId).populate<{ unit: Unit }>("unit")
}

function register(assetData: CreateAssetData, unit: Unit) {
  return Asset.create({ ...assetData, unit: unit })
}

function remove(assetId: string) {
  return Asset.deleteOne({ _id: assetId })
}
