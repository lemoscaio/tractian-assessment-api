import { CreateAssetData } from "../interfaces/assetInterfaces"
import { Unit } from "../interfaces/unitInterfaces"
import { Asset } from "../models/Asset"

export const assetRepository = {
  getAllByUnitId,
  findById,
  register,
  remove,
}

function getAllByUnitId(unitId: string) {
  return Asset.find({ unit: unitId })
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
