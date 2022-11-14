require("dotenv").config()
const express=require("express")

const connect=require("./config/config");
const cors= require("cors")
const PORT=process.env.PORT
const userRoute=require("./users/users.route")
const app=express()
app.use(express.json())
app.use(cors())

app.use("/users",userRoute)

app.get("/",(req,res)=>
{
    try
    {
        res.send("Working fine ")
    }
    catch(e)
    {
        res.send(e)
    }
   
})

app.listen(PORT,async()=>
{ 
    try
    {
        await connect()
        console.log("connection success") 
        console.log(connect())
    }
    catch(e)
    {
 
        console.log("no connection",e)    
    }
  
})
