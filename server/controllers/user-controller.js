// import user model
<<<<<<< HEAD
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');
=======
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
<<<<<<< HEAD
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
=======
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
<<<<<<< HEAD
      return res.status(400).json({ message: 'Something is wrong!' });
=======
      return res.status(400).json({ message: "Something is wrong!" });
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
<<<<<<< HEAD
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
=======
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
<<<<<<< HEAD
      return res.status(400).json({ message: 'Wrong password!' });
=======
      return res.status(400).json({ message: "Wrong password!" });
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
<<<<<<< HEAD
  async saveBook({ user, body }, res) {
=======
  async keepBook({ user, body }, res) {
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  // remove a book from `savedBooks`
  async deleteBook({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    if (!updatedUser) {
<<<<<<< HEAD
      return res.status(404).json({ message: "Couldn't find user with this id!" });
=======
      return res
        .status(404)
        .json({ message: "Couldn't find user with this id!" });
>>>>>>> ee9fc217c369b7104e4ba4bf16a35de31e044d59
    }
    return res.json(updatedUser);
  },
};
