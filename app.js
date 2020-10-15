const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('combined'))

app.get("/",(req,res) =>{
   console.log("responding to root route")
   res.send("hello from root!") 
})

app.get("/users",(req,res) =>{
    var user1 = {firstName: "Stephen", lastName: "Curry"}
    var user2 = {firstName: "Kevin", lastName: "Durant"}
    res.json([user1,user2])

 })
 

app.listen(3003,() => {
console.log("Server is up and listening on port 3003...")
})