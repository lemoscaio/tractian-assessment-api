import app from "./app"
import { connectDatabase } from "./config/database"

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port", process.env.port || 4000)
})

connectDatabase()
  .then(() =>
    console.log("Connected to the database:", process.env.DATABASE_NAME),
  )
  .catch((err: any) => console.log(err))
