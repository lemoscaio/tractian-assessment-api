import { Request, Response, Router } from "express"
import { assetRouter } from "./assetRouter"
import { authRouter } from "./authRouter"
import { companyRouter } from "./companyRouter"
import { unitRouter } from "./unitRouter"

export const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send("Online")
})
router.use(authRouter)
router.use(companyRouter)
router.use(unitRouter)
router.use(assetRouter)
