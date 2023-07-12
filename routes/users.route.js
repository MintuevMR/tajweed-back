import { Router, json } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import usersController from "../controllers/users.controller.js";
import { loginValidation, registerValidation } from "../validation/auth.validator.js";
import handleValidationErrors from "../middleware/handleValidationErrors.js";
import { User } from "../models/User.model.js";
const router = Router();
//регистрация 
router.post("/register", registerValidation, handleValidationErrors, usersController.registrationUser);
 // логин
router.post("/login", loginValidation, handleValidationErrors, usersController.login);                                  

router.get("/profile", authMiddleware, async (req, res) => {
    const user = await User.find()
    res.json(user)
});


export default router;
