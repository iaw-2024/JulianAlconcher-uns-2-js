const express = require("express");
const app = express();
const port = 3003;

app.listen(port, () => {
    console.log(`Server ready on port ${port}.`);
})

app.get("/canciones", (req, res) => {
    res.sendFile( __dirname + '/canciones.json');
});

module.exports = app