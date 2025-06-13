const express = require('express')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT ||  3000;
const HOST = '127.0.0.1'
var cors = require("cors")

app.use(cors())


var userRouter = require("./routes/userRouts")
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/api',userRouter)

app.get("/",(req, res)=>{
    return res.status(200).json({message : "server is up...."})
})



app.listen(PORT,HOST,()=>{
    console.log("Server is runing")
})