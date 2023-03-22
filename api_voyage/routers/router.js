const express =require( "express")
const countryRouter =require( "./country.router.js")
const cityRouter =require( "./city.router.js")

const router = express.Router()

router.use("/country",countryRouter)
router.use("/city",cityRouter)

module.exports = router