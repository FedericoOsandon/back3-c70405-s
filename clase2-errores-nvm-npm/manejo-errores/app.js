import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

import usersRouter from './routes/users.router.js'
// import petsRouter from './routes/pets.router.js'
import adoptionsRouter from './routes/adoption.router.js'
import sessionsRouter from './routes/sessions.router.js'
import pruebasRouter from './routes/pruebas.router.js'
import { configObject } from './config/index.js'
import { handleError } from './utils/error/error.middleware.js'
import { suma } from 'suma70345'


const app = express()
const connection = mongoose.connect(`mongodb://localhost:27017/c70405`)
const PORT = configObject.port 

app.use(express.json())
app.use(cookieParser())
console.log(suma(1,2,3,4,5,100))

app.use('/pruebas', pruebasRouter)
app.use('/api/users',usersRouter)
// app.use('/api/pets',petsRouter)
app.use('/api/adoptions',adoptionsRouter)
app.use('/api/sessions',sessionsRouter)
app.use(handleError)


app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


// process -> objeto