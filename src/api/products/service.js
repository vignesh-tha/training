const Product = require("./model")

const findById = async (id) => {
    return await Product.findById(id)
}

const find = async () => {
    return await Product.find()
}

const save = async (productData) => {
    const product = new Product(productData)
    return await product.save()
}

const deleteById = async (id) => {
    return await Product.findByIdAndDelete(id)
}

const findByName = async (name) => {
    return await Product.find({name:name})
}

module.exports = {findById , find, save, deleteById, findByName}