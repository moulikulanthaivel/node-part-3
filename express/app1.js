import express from "express"
import path from "path"
import dotenv from "dotenv"
import chalk from "chalk"
import { error } from "console"

dotenv.config({"path":"./setting/dev.env"})

let port = process.env.PORT
let host = process.env.HOST

const app = express()
app.get("/",(req,resp)=>{
    resp.send("hello pubg")
})

app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"send","index.html"))
})

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.yellow.underline(`server running successfully : http://${host}:${port}`));
})
