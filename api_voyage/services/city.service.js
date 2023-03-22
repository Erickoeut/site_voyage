const cityModel =require( "../models/city.model.js")

const cityService = {
    getAll:()=>{
        return  cityModel.getAll()
    },
    getOne:(id)=>{
        return cityModel.getOne(id)
    },
    create:()=>{},
    update:()=>{},
    delete:()=>{}
}

module.exports = cityService