/** @format */

require("dotenv").config();
const express = require("express");
const cookie = require("cookie-parser");
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 8001;
const { reqAuth } = require("./middleware/authMiddleware");

app.use(cookie());
app.use(express.json());
const maxAge = 3 * 60 * 1000;
const createToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: maxAge });
};
app.get("/", (req, res) => {
  const token = createToken(1);
  res.cookie("jwt", token, { httpOnly: true, maxAge });
  res.send("Hello World!");
});

app.get("/tes", reqAuth, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
