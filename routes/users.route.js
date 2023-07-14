import { Router, json } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import usersController from "../controllers/users.controller.js";
import {
  loginValidation,
  registerValidation,
} from "../validation/auth.validator.js";
import handleValidationErrors from "../middleware/handleValidationErrors.js";
import { User } from "../models/User.model.js";

import { upload } from "../middleware/upload.middleware.js";

const router = Router();
//регистрация
router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  usersController.registrationUser
);
// логин
router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  usersController.login
);

router.patch("/bookmark", authMiddleware, usersController.addBookmark);

router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).populate('bookmarks');
  res.json(user);
});

router.get("/bookmark", authMiddleware, async (req, res) => {
  const bookmark = await User.findById(req.user.id);
  res.json(user);
});

router.patch("/profile", authMiddleware, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    {
      new: true,
    }
  );
  res.json(user);
});

router.patch(
  "/profile/change-img",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.user.id,
        {
          avatar: `/uploads/${req.file.originalname}`,
        },
        { new: true }
      );
      return res.json(user);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
);

export default router;
