const express = require("express")
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/produtos", function(req, res) {
    res.json(data);
});

app.get("/produtos/:numeroPedido", function(req, res) {
    const { numeroPedido } = req.params;
    const client = data.find(cli => cli.numeroPedido == numeroPedido);
  
    if (!client) return res.status(204).json();
  
    res.json(client);
  });
  
  app.post("/produtos", function(req, res) {
    const { numeroPedido, descricao, sabor, tamanho, preco, tempoPreparo } = req.body;
  
    // Aqui salva o numero do produto.
  
    res.json({ numeroPedido, descricao, sabor, tamanho, preco, tempoPreparo });
  });
  
  app.put("/produtos/:numeroPedido", function(req, res) {
    const { numeroPedido } = req.params;
    const client = data.find(cli => cli.numeroPedido == numeroPedido);
  
    if (!client) return res.status(204).json();
  
    const { sabor } = req.body;
  
    client.sabor = sabor;
  
    res.json(client);
  });
  
  app.delete("/produtos/:numeroPedido", function(req, res) {
    const { numeroPedido } = req.params;
    const clientsFiltered = data.filter(client => client.numeroPedido != numeroPedido);
  
    res.json(clientsFiltered);
  });
  
  app.listen( process.env.PORT || 3000, console.log("Servidor is up") );