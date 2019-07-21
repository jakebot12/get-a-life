const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketSchema = new Schema({
  item: { type: String, required: true },
  comment: { type: String, required: false },
  userid: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Bucket = mongoose.model("Bucket", bucketSchema);

module.exports = Bucket;
