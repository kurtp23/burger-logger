const connection = require("./connection.js");
const orm = {
  displayBurgers: () => {
    connection.query("SELECT * FROM burgers;", function (err, data) {
      if (err) throw err;

      console.log(data);
      res.render("index", { burgers: data });
    });
  },

  addBurger: () => {
    connection.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",
      [req.body.burger],
      function (err, result) {
        if (err) throw err;

        res.redirect("/");
      }
    );
  },

  eatBurger: () => {
    connection.query(
      `UPDATE burgers
      SET
      devoured = TRUE
      WHERE
      id = (?)`,
      [req.params.id],
      function (err, result) {
        if (err) throw err;
        console.log("this is put", result);
      }
    );
  },
};

module.exports = orm;
