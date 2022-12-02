const productService = require('./service')

const findById = async (req, res) => {
    const product = await productService.findById(req.params.productId)
    res.json({status: 'success', data: product})
}

const find = async (req, res) => {
    const products = await productService.find()
    res.json({status: 'success', data: products})
}

const save = async (req, res) => {
    const product = req.body
    const updatedProduct = await productService.save(product)
    res.json({status: 'success', data: {product: updatedProduct}})
}

const deleteById = async (req, res) => {
    const product = await productService.deleteById(req.params.productId)
    res.json({status: 'success', message: "Deleted Successful!"})
}

const findByName = async (req, res) => {
    const product = await productService.findByName(req.query.name)
    res.json({status: 'success', data: product})
}
module.exports = {findById , find, save, deleteById, findByName}