const Favourite = require('./../models/favourite')

class FavouriteController {
    //getall.
    //getFavouriteByUser (phone)
    //createFavourite
    //deleteFavourite when click remove favourite or delete user or delete product




    //get all favourite
    //api/favourite/getfavourites
    async getAll(req, res) {
        await Favourite.find({})
            .then(favourite => res.json({ success: true, message: 'nice (>.<)', favourites:favourite }))
            .catch(err => res.json({ success: false, message: err.message }).status(400))
    }

    //get favourite by userId
    async getFavouriteByUser(req, res) {
        await Favourite.findOne({ userFavourite: req.body.userId })
            .then(favourite => res.json({ success: true, message: 'nice (>.<)', favourite }))
            .catch(err => res.json({ success: false, message: err.message }))
    }


    //add favourite product
    //api/favourite/add
    async addFavourite(req, res) {
        const { productFavourite } = req.body
        if (!productFavourite)
            return res.json({ success: false, message: 'missing productFavourite' })

        const favourite = await Favourite.findOne({ userFavourite: req.body.userId })
        //user is not already have a favourite list
        if (!favourite) {
            const newFavourite = new Favourite({
                userFavourite: req.body.userId,
                productFavourite,
            })
            newFavourite.save()
                .then(() => res.json({ success: true, message: 'Add new favourite list successfull (>.<)', newFavourite }))
                .catch((err) => res.json({ success: false, message: err.message }))
            // return res.send('nice')
            return
        }
        //user is already have
        //check product is in the favorite list
        if (!favourite.productFavourite.includes(productFavourite)) {
            favourite.productFavourite.push(productFavourite)
            favourite.save()
            return res.json({ success: true, message: 'add favourites successfull (>.<)', favourite })
        }

        return res.json({ success: false, message: 'product is already in the favorite list' })

    }


    //remove favourite product
    //api/favourites/remove
    async removeFavourite(req, res) {
        const { productFavourite } = req.body
        if (!productFavourite)
            return res.json({ success: false, message: 'missing productFavourite' })

        const favourite = await Favourite.findOne({ userFavourite: req.body.userId })
        //user is not already have a favourite list
        if (!favourite)
            return res.json({ success: false, message: 'user have not favourite list' })

        //user already have
        //check product is not in the favorite list
        if (!favourite.productFavourite.includes(productFavourite))
            return res.json({ success: false, message: 'the product is not in your favourite list' })

        //the product is in the favorite list
        favourite.productFavourite = favourite.productFavourite.filter(product => {
            return product !== req.body.productFavourite
        })
        favourite.save()
            .then(() => res.json({ success: true, message: 'remove successfull (>.<)', favourite}))
            .catch(err => res.json({ success: false, message: err.message }))
    }
}

module.exports = new FavouriteController