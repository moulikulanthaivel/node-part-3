import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config({"path":"./set/config.env"})
let SKEY=process.env.SKEY

let payload={
    "name": "mouli",
    "password": "12345678",

}

let token =jwt.sign(payload,SKEY) 
console.log(token);

let user_payload=jwt.verify(token,SKEY)
console.log(user_payload);