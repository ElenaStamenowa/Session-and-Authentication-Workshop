const User = require("../models/User");

//3 - layer architecture
//controller -> service ->domain model
//if(rPass === pass)

exports.register = (userData) => {
  return User.create(userData);
};
