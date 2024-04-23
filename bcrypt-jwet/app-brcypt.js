import brcypt from "bcrypt"

let user={
    "name": "anand",
    "email": "anand@&gmail.com",
    "password":"hye_buddie0",
    "CC":"123 456 786 555 345"
}

console.log(user);

let salt=10

brcypt.genSalt(salt,(err,salt)=>{
    brcypt.hash(user.password,salt,(err,hash)=>{
        if(err) throw err
        console.log(hash);
    })
    brcypt.hash(user.CC,salt,(err,hash)=>{
        if(err) throw err
        console.log(hash);
    })
})





// brcypt.compare(user.password,hash,(err,result)=>{
//     if(err) throw err
//     console.log(result);
// })


// console.log(user.password)
// let flag = bcrypt.compareSync("abc",user.password)
// console.log(flag)
