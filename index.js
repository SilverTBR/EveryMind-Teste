const express = require("express")
const mustacheExpress = require("mustache-express");
const path = require('path');


const app = express();
var engine = mustacheExpress();

const inicial = require("./rotas/paginas")
const API = require("./rotas/api")


app.engine("mustache", engine);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "mustache");


app.use("/", inicial);
app.use("/API", API)




app.listen(3000, () => {
    console.log("Rodando...");
})
