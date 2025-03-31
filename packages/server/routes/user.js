import express from 'express'
import regist from '../controllers/regist.controllers.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('user')
})
router.post('/', regist)


export default router;