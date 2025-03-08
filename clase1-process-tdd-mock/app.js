import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import usersRouter from './routes/users.router.js'
// import petsRouter from './routes/pets.router.js'
import adoptionsRouter from './routes/adoption.router.js'
import sessionsRouter from './routes/sessions.router.js'
import pruebasRouter from './routes/pruebas.router.js'
import { configObject } from './config/index.js'


const app = express()
const connection = mongoose.connect(`mongodb://localhost:27017/c70405`)
const PORT = configObject.port 

app.use(express.json())
app.use(cookieParser())


app.use('/pruebas', pruebasRouter)
app.use('/api/users',usersRouter)
// app.use('/api/pets',petsRouter)
app.use('/api/adoptions',adoptionsRouter)
app.use('/api/sessions',sessionsRouter)



app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


// process -> objeto