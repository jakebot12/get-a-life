const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketSchema = new Schema({
  item: { type: String, required: false },

  imageBucket: { type: String, required: false },
  userid: { type: String, required: false },
  username: { type: String, required: false },
  date: { type: Date, default: Date.now },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  career: { type: String, required: false },
  age: { type: String, required: false },

  bucketListOne: { type: String, required: false },
  bucketListTwo: { type: String, required: false },
  bucketListThree: { type: String, required: false },


  belongsTo: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Bucket = mongoose.model("Bucket", bucketSchema);

module.exports = Bucket;
