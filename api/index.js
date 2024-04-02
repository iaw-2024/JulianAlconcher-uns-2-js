const express = require("express");
const axios = require("axios");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('public/express/views'));
app.use(express.static('public'));

async function getSongs() {
    const response = await fetch("https://6600c5a387c91a116419a29f.mockapi.io/songs");
    const obj = await response.json();
    return obj;
}

app.get("/express", (req, res) => {
    getSongs().then((json) => res.render("index", { obj : json }));
});


app.get('/cliente_servidor/get_datos', async (req, res) => {
      const response = await axios.get('https://6600c5a387c91a116419a29f.mockapi.io/songs');
      const obj = response.data;
      res.json(obj);
});

app.use(express.static('public'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;