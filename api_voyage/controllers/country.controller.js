const countryService = require ("../services/country.service")

const countryController = {
    getAll:(req,res)=>{
        const allCountries = countryService.getAll()
        res.json(allCountries)
    },
    getOne:(req,res)=>{
        id = req.params.id
        const oneCountry = countryService.getOne(id)
        if(oneCountry){
            res.json(oneCountry)
        }
        else{
            res.status(404).json({error:`il n'y a pas de pays avec l'id ${id}`})
        }
    },
    create:()=>{},
    update:()=>{},
    delete:()=>{}
}

module.exports = countryController