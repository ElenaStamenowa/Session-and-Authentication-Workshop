const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// todo: if user still exists throw err
userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new mongoose.MongooseError("password missmach");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
