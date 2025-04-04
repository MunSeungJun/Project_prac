import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.js'
import indexRouter from './routes/index.js'
import connect from './schema/index.js'
import logger from 'morgan'
import cookieParser from "cookie-parser";

const app = express()
app.use(logger('dev'))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

connect();
app.use('/', indexRouter)
app.use('/users', userRouter)


export default app;