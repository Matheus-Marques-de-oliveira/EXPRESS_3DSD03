const express = require("express");
const app = express();

const PORT = 3500; // 65k
// criação das rotas
app.use(express.static(__dirname + ""));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});
// criar rota 404 (middleware)
app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});
app.listen(PORT, () => {
  console.log("running... " + PORT);
});
