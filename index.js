const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { title: "index page" });
})

app.listen(PORT, () => {
    console.log(`app listen on port 3000`)
})