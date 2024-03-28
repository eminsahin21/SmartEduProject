const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Index Sayfasi");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda calismaya basladi...`);
});
