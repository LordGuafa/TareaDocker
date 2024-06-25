const Users = require("../model/user.model");

const User = {
  get: async (req, res) => {
    const { name } = req.params;
    const user = await Users.findOne({ username: name });
    res.status(200).send(user);
  },
  list: async (req, res) => {
    const users = await Users.find();
    res.status(200).send(users);
  },
  create: async (req, res) => {
    try {
      console.log(req.body);
      const user = new Users(req.body);
      const savedUser = await user.save();
      res.status(201).send(savedUser._id);
    } catch (error) {
      if (error.code === 11000) {
        res.sendStatus(500);
        console.log("Error: El nombre de usuario ya existe");
      } else {
        res.sendStatus(502);
        console.error("Error al crear el usuario:", error);
      }
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    Object.assign(user, req.body);
    await user.save();
    res.status(204).send();
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    if (user) {
      await Users.deleteOne({ _id: id });
    }
    res.sendStatus(204);
  },
  noExist: (req, res) => {
    res.status(404).send("No existe");
  },
  verify: async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({
      username: username,
      password: password,
    });

    if (user) {
      res.json({ success: true, userData: { username: user.username } });
    } else {
      res.json({ success: false });
    }
  },
};
module.exports = User;
