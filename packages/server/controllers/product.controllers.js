import Product from '../models/product.js'

const getSaleProducts = async(req, res) => {
    try {
        const saleProducts = await Product.find({ isSale : true })
        res.status(200).json(saleProducts)
    } catch (e) {
        res.status(500).json({
            message: '세일 상품을 불러오는데 실패하였습니다'
        })
        console.log(e)
    }
}

export { getSaleProducts }