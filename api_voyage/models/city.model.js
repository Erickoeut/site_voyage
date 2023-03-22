const cityList = require("../db/city.json")
const cityModel = {
    getAll:()=>{
        return (structuredClone(cityList) )
    },
    getOne:(id)=>{
        return cityList.find(city=>city.cityId==id)
    },
    create:()=>{},
    update:()=>{},
    delete:()=>{}
}

module.exports = cityModel