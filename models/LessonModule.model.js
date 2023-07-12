import mongoose from "mongoose";

const LessonModuleSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    lessons: [ ]
  });
  
export const LessonModule = mongoose.model("LessonModule", LessonModuleSchema);
