const { Schema, default: mongoose, model } = require("mongoose");

const PostSchema = new Schema({
  user_id : {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
  content: {type: String, minlength: 1, maxlength: 300, required: true},
  created_at: {type: Date, default: Date.now, required: true},
  updated_at: {type: Date, default: Date.now, required: true},
  likes: {type: Number, default: 0, min: 0}
})

const PostModal = model("posts", PostSchema);

module.exports = PostModal;