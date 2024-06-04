const  express = require("express")

const app = express()

app.get("/hello",(req,res,next)=>{
    res.send("Hello World");
})


app.listen(8000,()=>{
    console.log("this  server is running on port ");
})