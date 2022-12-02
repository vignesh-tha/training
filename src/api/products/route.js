const express = require('express')
const { findById, find, save, deleteById, findByName } = require('./controller');
const router = express.Router()


router.get('/findByName', findByName)
router.get('/', find)
router.get('/:productId', findById)
router.post('/', save)
router.delete('/:productId', deleteById)

module.exports = router