const countries = require("../db/country.json")
const cities = require("../db/city.json")
const countryModel = {
    getAll:()=>{
        countries.map(country=>country.destinations = cities.filter(city=>city.countryId===country.countryId))
        return structuredClone(countries)

    },
    getOne:(id)=>{
        const countryList =structuredClone(countries)
        const selectedCountry = countryList.find(country=>country.countryId===id)
        if(selectedCountry){
            selectedCountry.destinations = cities.filter(city=>city.countryId===id)
        }
        return selectedCountry
    },
    create:()=>{},
    update:()=>{},
    delete:()=>{}
}

module.exports = countryModel