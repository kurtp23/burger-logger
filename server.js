const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
const app = express();

const PORT = process.env.PORT || 4000;
// include midleware to parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password",
  database: "burgers_db",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) throw err;

    console.log(data);
    res.render("index", { burgers: data });
  });
});
app.post("/", function (req, res) {
  connection.query(
    "INSERT INTO burgers (burger_name) VALUES (?)",
    [req.body.burger],
    function (err, result) {
      if (err) throw err;

      res.redirect("/");
    }
  );
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
