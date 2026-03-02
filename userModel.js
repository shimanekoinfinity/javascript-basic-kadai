const db = require("../database/db");

exports.getAll = (callback) => {
  db.all(
    "SELECT * FROM users",
    [],
    callback
  );
};