import express from 'express'
const router = express.Router()

router.get('/users', (req, res) => {
    res.send('user')
})
router.post('/users', (req, res) => {
    res.status(200).json({
        message:'success'
    })
})

export default router;