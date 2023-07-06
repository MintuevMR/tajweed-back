import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  login: { type: String, require: true },
  firstName: { type: String, default: "Name" },
  lastName: { type: String, default: "Name" },
  role: {type: String, default: 'user'},
  password: { type: String },
});

export const User = mongoose.model("User", userSchema);
