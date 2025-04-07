import express from 'express'
import { getSaleProducts } from '../controllers/product.controllers.js'
const router = express.Router()

router.get('/sale', getSaleProducts )

export default router;