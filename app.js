const express = require("express");

const app = express();

//TEMPLATE ENGINE
app.set('view engine','ejs')

//Middlewares
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.status(200).render("index",{
    page_name:'index'
  });
});

app.get("/about", (req, res) => {
    res.status(200).render("about",{
        page_name:'about'
    });
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda calismaya basladi...`);
});
