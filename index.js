const express = require ('express');
const app = express();
const port = 8080;
const path = require('path');

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("response receive");
})

app.listen(port,(req,res) =>{
    console.log("running");
})

let posts = [
   {
    user: "raj",
    Comment: " Abcd dfg"
   } ,

    {
    user: "raj",
    Comment: " Abcd dfg"
   } ,

    {
    user: "raj",
    Comment: " Abcd dfg"
   } ,

    {
    user: "raj",
    Comment: " Abcd dfg"
   } 
]
app.get("/post",(req,res)=>{
    res.render("posts.ejs",{posts});
})