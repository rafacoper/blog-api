const User = require('../models/userModel');

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    return res.json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const findUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: 'posts' });
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, cpf, phone, email } = req.body;
  try {
    const user = await User.findOne({
      where: { id }
    });
    user.firstName = firstName;
    user.lastName = lastName;
    user.cpf = cpf;
    user.phone = phone;
    user.email = email;

    await user.save();
    return res.json(user);

  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({
      where: { id }
    });
    await user.destroy();
    return res.json({ message: "User Deleted" });
  } catch (err) {
    return res.status(500).json({ err: "An error occured" });
  }
};

module.exports = {
  createUser,
  findUsers,
  updateUser,
  deleteUser
}