const countryModel = require("../models/country.model")

const countryService = {
    getAll:()=>{
        const allCountries = countryModel.getAll()
        return allCountries
    },
    getOne:(id)=>{
        const oneCountry = countryModel.getOne(id)
        return oneCountry
    },
    create:()=>{},
    update:()=>{},
    delete:()=>{}
}

module.exports = countryService