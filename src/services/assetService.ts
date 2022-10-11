import { CreateAssetData } from "../interfaces/assetInterfaces"
import { assetRepository } from "../repositories/assetRepository"
import { unitRepository } from "../repositories/unitRepository"
import { userRepository } from "../repositories/userRepository"
import {
  conflictError,
  internalServerError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils"

export async function getAllUnitAssets(userEmail: string, unitId: string) {
  const user = await userRepository.findByEmail(userEmail)

  const unit = await unitRepository.findById(unitId)

  if (!unit) {
    throw notFoundError("The provided unit does not exist")
  }

  if (!user.company || unit?.company.toString() !== user?.company.toString()) {
    throw conflictError(
      "The user must be part of the company to which the unit belongs",
    )
  }

  const assets = await assetRepository.getAllByUnitId(unitId)

  return assets
}

export async function registerAsset(
  userEmail: string,
  unitId: string,
  assetData: CreateAssetData,
) {
  const user = await userRepository.findByEmail(userEmail)

  const unit = await unitRepository.findById(unitId)

  if (!unit) {
    throw notFoundError("The provided unit does not exist")
  }

  if (!user.company || unit?.company.toString() !== user?.company.toString()) {
    throw conflictError(
      "The user must be part of the company to which the unit belongs",
    )
  }

  const createdAsset = await assetRepository.register(assetData, unit)

  return createdAsset
}

export async function updateAsset(
  userEmail: string,
  assetId: string,
  assetData: CreateAssetData,
) {
  const user = await userRepository.findByEmail(userEmail)

  const asset = await assetRepository.findById(assetId)

  if (!asset) {
    throw notFoundError("Asset not found")
  }

  if (
    !user.company ||
    user.company.toString() !== asset.unit.company.toString()
  ) {
    throw unauthorizedError(
      "The user must be part of the company to which the asset belongs",
    )
  }

  Object.keys(assetData).forEach((key) => {
    asset[key] = assetData[key]
  })

  asset.save()

  return asset
}

export async function deleteAsset(userEmail: string, assetId: string) {
  const user = await userRepository.findByEmail(userEmail)

  const asset = await assetRepository.findById(assetId)

  if (!asset) {
    throw notFoundError("Asset not found.")
  }

  if (
    !user.company ||
    user.company.toString() !== asset.unit.company.toString()
  ) {
    throw unauthorizedError(
      "The user must be part of the company to which the asset belongs.",
    )
  }

  const deletedContent = await assetRepository.remove(assetId)

  if (deletedContent.deletedCount === 0) {
    throw internalServerError(
      "Something went wrong. The asset couldn't be deleted.",
    )
  }

  return deletedContent
}
