import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import cookieParser from "cookie-parser";
import connect from './schema/index.js'
import indexRouter from './routes/index.js'
import userRouter from './routes/user.js'
import productRouter from './routes/product.js'

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
app.use('/products', productRouter)


export default app;