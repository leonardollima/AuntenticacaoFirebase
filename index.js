import express from "express"
import { engine } from 'express-handlebars';

const handlebars = engine;
const app = express()

app.use(express.static('public'));
app.set("views", "/views")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine" , pageExtensao)

app.get("/", function(req, res) {
    res.render("task") 
})

app.listen(8080, function(){
    console.log("O servidor está ativo")
})