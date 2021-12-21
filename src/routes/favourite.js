const express = require('express')
const router = express.Router()
const favouriteController = require('../app/controllers/favouriteController')
const verifyToken = require('./../middleware/auth')

router.get('/getfavourites', verifyToken, favouriteController.getAll)
router.post('/add', verifyToken, favouriteController.addFavourite)
router.post('/remove', verifyToken, favouriteController.removeFavourite)
router.get('/', verifyToken, favouriteController.getFavouriteByUser)

module.exports = router