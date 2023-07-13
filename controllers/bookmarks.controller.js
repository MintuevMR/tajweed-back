import { BookmarkModule } from "../models/Bookmark.model.js";


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
      if (!bookmarkArray.bookmarkLessons.includes(req.params.id)) {
        const module = await BookmarkModule.findOneAndUpdate(
          { user: req.user.id },
          {
            $push: { bookmarkLessons: req.params.id },
          }, {new: true}
        );
        return res.json(module)
      } else {
        const module = await BookmarkModule.findOneAndUpdate(
          { user: req.user.id },
          {
            $pull: { bookmarkLessons: req.params.id },
          }, {new: true}
        );
        return res.json(module)
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};


export default bookmarkController;
