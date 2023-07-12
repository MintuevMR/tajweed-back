import { BookmarkModule } from "../models/Bookmark.module.js";


const bookmarkController = {
  getBookmark: async (req, res) => {
    const bookmarkLesson = await BookmarkModule.findOne({
      user: req.params.userId,
    }).populate("bookmarkLessons");
    res.json(bookmarkLesson);
  },
  postBookmark: async (req, res) => {
    try {
      const search = await BookmarkModule.findOne({ user: req.user.id });
      if (search) {
        return null;
      }
      const data = await BookmarkModule.create({
        user: req.user.id,
      });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addBookmark: async (req, res) => {
    try {
      const bookmarkArray = await BookmarkModule.findOne({ user: req.user.id });
      if (!bookmarkArray.bookmarkLessons.includes(req.body.id)) {
        await BookmarkModule.findOneAndUpdate(
          { user: req.user.id },
          {
            $push: { bookmarkLessons: req.body.id },
          }
        );
      } else {
        await BookmarkModule.findOneAndUpdate(
          { user: req.user.id },
          {
            $pull: { bookmarkLessons: req.body.id },
          }
        );
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};


export default bookmarkController;
