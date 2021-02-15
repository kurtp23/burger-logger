const express = require("express");
const burgers = require("../modules/burgers.js");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
