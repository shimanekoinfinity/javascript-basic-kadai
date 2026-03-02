const userModel = require("../models/userModel");

exports.getUsers = (req, res) => {
  userModel.getAll((err, rows) => {
    if (err)
      return res.status(500).json(err);

    res.json(rows);
  });
};