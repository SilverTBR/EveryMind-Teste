const express = require("express")
var inicial = express.Router();

inicial.get("/", (req, res) => {
    let produto = null;
    if(req.query.produto){
        produto = JSON.parse(req.query.produto)
    }
    res.render("main", {produto: produto})
})

module.exports = inicial;