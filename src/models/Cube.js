const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,

  //za edinica (1 accessory)
  // accessory: {
  //   type: mongoose.Types.ObjectId, //type from mongoDB
  //   ref: "Accessory", //the name of the model
  // },

  //za kolekciq (1 cube to has many accessories)
  accessories: [
    {
      type: mongoose.Types.ObjectId, // type from mongo
      ref: "Accessory", // the name of the model
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;