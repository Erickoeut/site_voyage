const dotenv = require('dotenv')
const router =require( "./routers/router.js")
const cors = require ('cors')

const express =require( "express")

dotenv.config();
const port = process.env.PORT||3000

const app = express()

app.use(cors());
app.use(express.static('public'));

app.use(express.json())
app.use("/api/v1",router)

app.all("*",(req,rest)=>{
    rest.status(404).json(
        {error:"not found"}
    )
})

app.listen(port,()=>{console.log(`server launch on port ${port}`)})
