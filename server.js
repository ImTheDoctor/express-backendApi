import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import playerRoutes from './routes/playersRout.js'

const app = express()
const PORT = 3001
app.use(cors())
app.use(bodyParser.json())

app.use('/players', playerRoutes)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))