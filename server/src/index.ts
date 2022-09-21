import express from 'express'
import cors from 'cors'

import { routes as adsRoutes } from './routes/ads'
import { routes as gamesRoutes } from './routes/games'
import { routes as authRoutes } from './routes/auth'

const PORT = process.env.PORT || 5050

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/ads", adsRoutes)
app.use("/api/games", gamesRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log("Running server on port: " + PORT))