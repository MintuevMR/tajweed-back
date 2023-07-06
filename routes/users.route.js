import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.post("/register", usersController.registrationUser);  //регистрация 
router.post("/login", usersController.login);                // логин

// router.get("/profile/", authMiddleware, () => {
//   return;
// });


export default router;
