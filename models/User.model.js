import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  login: { type: String, require: true, unique: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  avatar: { type: String },
  role: { type: String, default: "user" },
  password: { type: String, require: true },
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LessonModule",
    },
  ],
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Groups",
  }]
});

export const User = mongoose.model("User", userSchema);
