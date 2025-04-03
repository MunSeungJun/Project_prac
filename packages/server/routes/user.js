import express from 'express'
import { regist, login } from '../controllers/user.controllers.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('user')
})
router.post('/regist', regist)
router.post('/login', login)


export default router;