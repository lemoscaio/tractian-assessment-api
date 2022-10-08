import cors from "cors"
import express from "express"
import "express-async-errors"
import { router } from "./routers/index"
import { handleError } from "./middlewares/errorHandler"
import { loadEnv } from "./config/envs"

loadEnv()

const app = express()
app.use(cors()).use(express.json())
app.use(router)
app.use(handleError)

export default app
