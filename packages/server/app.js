import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.js'
import indexRouter from './routes/index.js'
import connect from './schema/index.js'
import logger from 'morgan'

const app = express()
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connect();
app.use('/', indexRouter)
app.use('/users', userRouter)


export default app;