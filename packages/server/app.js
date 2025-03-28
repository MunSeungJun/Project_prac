import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.js'
import indexRouter from './routes/index.js'
import connect from './schema/index.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', indexRouter)
app.use('/api', userRouter)
connect(process.env.DB_URI);

export default app;