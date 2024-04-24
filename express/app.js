import express from "express"
import path from "path"

const app = express()

app.get("/",(req,resp)=>{
    resp.send("welcome to my file")
})

app.listen(8080,"127.0.0.1",(err)=>{
    if(err) throw err
    console.log(`server running : http://127.0.0.1:8080`);
})