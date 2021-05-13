const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  confirmPassword: {type: String,require: true},
});

const users= mongoose.model("User", userSchema);
module.exports = users ; 