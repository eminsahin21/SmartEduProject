const express = require("express");
const mongoose = require("mongoose")
const pageRoute = require("./routes/pageRoutes")
const courseRoute = require("./routes/courseRoute")

const app = express();

//connect database
mongoose.connect('mongodb://127.0.0.1/smartedu-db',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Veritabanına başarılı bir şekilde bağlanıldı.")
});

//TEMPLATE ENGINE
app.set('view engine','ejs')

//Middlewares
app.use(express.static("public"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda calismaya basladi...`);
});
