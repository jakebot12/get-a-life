const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  
  comment: { type: String, required: true },
  posterid: { type: String, required: false },
  postername: { type: String, required: false },
  date: { type: Date, default: Date.now },
  postedBy: [{type: Schema.Types.ObjectId, ref: 'User' }],
  bucketPostedTo: [{type: Schema.Types.ObjectId, ref: 'Bucket' }]
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
