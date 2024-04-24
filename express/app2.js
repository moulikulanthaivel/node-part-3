import express from "express"
import dotenv from "dotenv"
import chalk  from "chalk"
import morgan from "morgan"
import path from "path"

dotenv.config({"path":"./setting/app2.env"})
let port=process.env.PORT
let host=process.env.HOST



const app2 = express()
app2.get("/mouli",(req,resp)=>{
    resp.send("hye mouli why looking so handsome")
})

app2.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"send","index.html"))
})

app2.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.yellow.underline(`server runs : http://${host}:${port}`));
})