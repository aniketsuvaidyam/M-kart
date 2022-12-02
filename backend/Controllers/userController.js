const User = require("../Models/userModel");

// getAlluser

const getAlluser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).json({ message: "All user ", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await User.destroy({ where: { id: id } });
    res.status(200).json({ message: "Delete Secussfully", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAlluser,
  deleteUser,
};
