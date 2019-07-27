const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  career: { type: String, required: false },
  age: { type: String, required: false },
  bucketItem: { type: String, required: false },
  cardTitle: { type: String, required: false },
  cardImage: { type: String, required: false },
  cardText: { type: String, required: false },
  
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
