/** @format */
require("dotenv").config();
const express = require("express");
const usersRoutes = require("./routes/users");
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/", (req, res, next) => {
  res.send("hello world");
});

// app.use(express.json());
// app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server Running di port : ${PORT}`);
});
