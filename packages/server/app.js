import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.js'
import indexRouter from './routes/index.js'
import connect from './schema/index.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', indexRouter)
app.use('/users', userRouter)

connect();

export default app;