import { LessonModule } from "../models/LessonModule.model.js";

const lessonsController = {
  getAllModules: async (req, res) => {
    const lessons = await LessonModule.find();
    res.json(lessons);
  },

  addModule: async (req, res) => {
    const { name, title, description, text, ref } = req.body;
    try {
      const lessonModule = await LessonModule.create({
        name,
        title,
        description,
        text,
        ref,
      });
      return res.json(lessonModule);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  addLessonToModule: async (req, res) => {
    try {
      const addLesson = await LessonModule.findByIdAndUpdate(
        req.params.id,
        { $push: { lessons: req.body.lessons } },
        { new: true }
      );
      return res.json(addLesson);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }, 

  getOneLessonInModule: async (req, res) => {
    try {
      const lesson = await LessonModule.findOne(
        { _id: req.params.moduleId },
        { lessons: { $elemMatch: { _id: req.params.lessonId } } }
      );
      return res.json(lesson);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

};


export default lessonsController;
