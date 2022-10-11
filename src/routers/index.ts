import { Request, Response, Router } from "express"
import { assetRouter } from "./assetRouter"
import { authRouter } from "./authRouter"
import { companyRouter } from "./companyRouter"
import { unitRouter } from "./unitRouter"
import { userRouter } from "./userRouter"

export const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send("Online")
})
router.use(authRouter)
router.use(userRouter)
router.use(companyRouter)
router.use(unitRouter)
router.use(assetRouter)
