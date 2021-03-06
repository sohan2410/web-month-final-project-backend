const { json } = require("express");
const jwt = require("jsonwebtoken");
const client = require("../configs/db");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(500).json({
        error: "server error occured",
      });
    }
    const userEmail = decoded.email;
    client
      .query(`SELECT * FROM details WHERE email = '${userEmail}';`)
      .then((data) => {
        if (data.command.length === 0) {
          res.status(400).json({
            message: "invalid token",
          });
        } else {
          req.email = userEmail;
          next();
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "database error occured",
        });
      });
  });
};
