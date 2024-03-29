const express = require("express");
const app = express();

app.set("view engine", "ejs");

async function getSongs() {
    const response = await fetch("https://6600c5a387c91a116419a29f.mockapi.io/songs");
    const obj = await response.json();
    return obj;
}

app.get("/express", (req, res) => {
    getSongs().then((json) => res.render("index", { obj : json }));
});
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));

app.use(express.static('public'));


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;