import mongoose from "mongoose";

const LessonModuleSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
    },
    name: String,
    lessons: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        text: {
          type: String,
        }
      }
    ]
  });
  
export const LessonModule = mongoose.model("LessonModule", LessonModuleSchema);
