const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {type: String, minlength: 1, maxlength: 50, required: true},
    email: {type: String, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, required: true},
    bio: {type: String, minlength: 0, maxlength: 200},
    created_at: {type: Date, default: Date.now, required: true},
    updated_at: {type: Date, default: Date.now, required: true}
  })

const UserModel = model('users', UserSchema);
module.exports = UserModel;