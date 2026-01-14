const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4:uuidv4 } = require('uuid');

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("response receive");
})

app.listen(port, (req, res) => {
    console.log("running");
})

let posts = [
    {
        id: uuidv4(),
        user: "ullu",
        Comment: " baklol dfg"
    },

    {
        id: uuidv4(),
        user: "kallu",
        Comment: " baal kaatne"
    },

    {
        id: uuidv4(),
        user: "tillu",
        Comment: " bheekh wala"
    },

    {
        id: uuidv4(),
        user: "niddu",
        Comment: " pres krne wala"
    }
]
app.get("/post", (req, res) => {
    res.render("posts.ejs", { posts });
})

app.get("/posts/newPost", (req, res) => {
    res.render("newPost.ejs");
})

app.post("/posts", (req, res) => {
    let {user, Comment } = req.body;
    let id =  uuidv4();
    posts.push({ id,user, Comment });
    res.redirect("/post");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("showPost.ejs",{post});
})