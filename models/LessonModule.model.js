import mongoose from "mongoose";

const LessonModuleSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    image: {
      type: String,
    },

    lessons: [
      {
        nameLesson: {
          type: String,
        },
        description: {
          type: String,
        },
        content: {
          type: String,
        }
      }
    ]
  });
  

export const LessonModule = mongoose.model("LessonModule", LessonModuleSchema);
