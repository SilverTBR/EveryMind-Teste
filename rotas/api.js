const express = require("express")
const produtos = require("../models/produtos")
const rota = express.Router();

rota.post("/produto", async (req, res) => {
    let resultado = await produtos.cadastrar(req.body);
    res.json(resultado)
    
})

rota.get("/produto", async (req, res) => {
    let resultado = await produtos.exibirTodos();
    res.json(resultado);
})

rota.put("/produto/:id", async (req, res) => {
    let {id} = req.params;
    let resultado = await produtos.update(id, req.body);
    res.json(resultado);
})

rota.delete("/produto/:id", async (req, res) => {
    let {id} = req.params;
    let resultado = await produtos.deletar(id);
    res.json(resultado);
})

module.exports = rota;