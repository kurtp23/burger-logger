const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Password",
  database: "burgers_db",
});

connection.query("SELECT * FROM burgers;", function (err, data) {
  if (err) throw err;

  console.log(data);
  res.render("index", { burgers: data });
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;
// connection.query = util.promisify(connection.query);
