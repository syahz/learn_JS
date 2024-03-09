/** @format */
const usersModels = require("../models/users");
const getAllUsers = async (req, res) => {
  const [data] = await usersModels.getAllUsers();

  res.json({
    massage: "GET Response Successsss",
    data: data,
  });
};

module.exports = {
  getAllUsers,
};
