import mongoose from "mongoose";

const LessonModuleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  title: String,
  description: String,
  text: String,
  ref: String,
});

export const LessonModule = mongoose.model("LessonModule", LessonModuleSchema);
