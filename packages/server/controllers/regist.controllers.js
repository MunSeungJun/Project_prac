const regist = (req, res) => {
    res.status(200).json({
        message:'success',
        data: req.body
    })
}

export default regist