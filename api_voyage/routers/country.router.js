const express =require( "express")
const countryController =require( "../controllers/country.controller.js")
const countryRouter = express.Router()

countryRouter.route("/")
    .get(countryController.getAll)

countryRouter.route("/:id")
    .get(countryController.getOne)

module.exports = countryRouter