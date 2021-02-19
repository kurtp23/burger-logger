const express = require("express");
const orm = require("./config/orm.js");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 4000;
// include midleware to parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("pub"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", orm.displayBurgers);

app.post("/", orm.addBurger);
app.put("/:id", orm.eatBurger);

app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
