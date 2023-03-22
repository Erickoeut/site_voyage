const express = require("express")
const cityController = require("../controllers/city.controller.js")
const cityRouter = express.Router()

cityRouter.route("/")
    .get(cityController.getALL)

cityRouter.route("/:id")
    .get(cityController.getOne)

module.exports = cityRouter