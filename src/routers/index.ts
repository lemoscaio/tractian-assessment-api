import { Request, Response, Router } from "express"
import { authRouter } from "./authRouter"
import { companyRouter } from "./companyRouter"

export const router = Router()

router.get("/", (req: Request, res: Response) => {
  res.send("Online")
})
router.use(authRouter)
router.use(companyRouter)
