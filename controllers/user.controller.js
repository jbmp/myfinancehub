const User = require('../models/user');

const createUser = async (req, res) => {
    const { username, password, email, name } = req.body;

    const newUser = new User({username, password, email, name});
    await newUser.save();
    res.status(200).json({ newUser });
}

const listUsers = async (req, res) => {
    const users = await User.find();

    res.status(200).json({ users });
}

module.exports = {
    createUser,
    listUsers,
}