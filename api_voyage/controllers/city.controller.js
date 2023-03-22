const cityService =require("../services/city.service.js")

const cityController = {
    getALL:(req,res)=>{
        const allCity = cityService.getAll()
        res.json(allCity)
    },
    getOne:(req,res)=>{
        const id=req.params.id
        const oneCity = cityService.getOne(id)
        if(oneCity){
            res.json(oneCity)
        }
        else{
            res.status(404).json({error :`il n'y a pas de destination avec l'id ${id}`})
        }

    },
    create:(req,res)=>{},
    update:(req,res)=>{},
    delete:(req,res)=>{}
}

module.exports = cityController