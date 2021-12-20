const express = require('express')
const router = express.Router()
const favouriteController = require('../app/controllers/favouriteController')

router.get('/getfavourites', favouriteController.getAll)
router.post('/add',favouriteController.addFavourite)
router.post('/remove',favouriteController.removeFavourite)
router.get('/', favouriteController.getFavouriteByUser)

module.exports = router