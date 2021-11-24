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

 var users = { 1: {"first" : "aaron", "last" : "rodgers"} }

// Query Param
// http://localhost:3003/user/id=1
app.get("/user/:id",(req,res) =>{
   let id = req.query.id
   var idNum = req.params.id
   console.log(idNum)

   var test = Number(id)

   if (users[test]){
      res.json(users)

   }else{
      res.status(404).send('User not found')
   }
})

 

app.listen(3003,() => {
console.log("Server is up and listening on port 3003...")
})