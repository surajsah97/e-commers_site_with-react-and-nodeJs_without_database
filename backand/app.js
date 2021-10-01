import express from "express";
import Data from "./Data.js";
const Port=5000
const app=express()
app.get("/",(req,res,next)=>{
    res.send("hello server")
})
app.get("/api/product",(req,res,next)=>{
    res.send(Data)
})
app.listen(Port,()=>console.log(`server is running ${Port}`))