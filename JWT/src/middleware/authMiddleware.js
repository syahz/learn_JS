/** @format */

const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

const reqAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        console.log(decoded);
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = { reqAuth };
