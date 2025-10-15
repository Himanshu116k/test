import express from "express"
import cors from "cors"

const port = 5000;

const app = express()
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials:true
}))
app.use(express.json())

app.get("/",async(_,res)=>{
    res.send("hello from the front page ")
})

app.get("/data",async(_,res)=>{
    const obj ={
        name:"Himanshu",
        data:"just for checkin api",
        mob:"123123123123"
    }
    return res.status(200).json({message:"success",data:obj})
})


app.listen(port,()=>{
    
    console.log(`the server is running on port ${port}`)
})