import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  login: { type: String, require: true, unique : true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  role: { type: String, default: "user" },
  password: { type: String, require: true },
  // saved: [mongoose.SchemaTypes.ObjectId, ref: "LessonModule"]
});

export const User = mongoose.model("User", userSchema);
