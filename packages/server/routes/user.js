import express from 'express'
import { regist, login, logout, check } from '../controllers/user.controllers.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('user')
})
router.post('/regist', regist)
router.post('/login', login)
router.get('/logout', logout)
router.get('/check', check)


export default router;