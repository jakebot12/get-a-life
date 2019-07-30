const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  career: { type: String, required: false },
  age: { type: String, required: false },
  imageuser: {type: String, required: false},
  date: { type: Date, default: Date.now },
  buckets: [{type: Schema.Types.ObjectId, ref: 'Bucket' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
