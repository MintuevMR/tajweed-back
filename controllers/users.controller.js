import bcrypt from "bcrypt";
import { User } from "../models/User.model.js";
import jwt from "jsonwebtoken";


const usersController = {
  registrationUser: async (req, res) => {
    const { login, password, firstName, lastName } = req.body;
    const hash = await bcrypt.hash(password, +process.env.BCRYPT_ROUNDS);
    try {
      const user = await User.create({
        login,
        firstName,
        lastName,
        password: hash,
      });

      // BookModule
      res.json(user);
    } catch (error) {
      res.status(401).json({ error: "Ошибка при регистрации " + error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });

      if (!candidate) {  
        return res 
          .status(401)
          .json({ error: "Ошибка при входе " + error.message });
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res
          .status(401)
          .json({ error: "Ошибка при входе " + error.message });
      }
      const token = await jwt.sign(
        {
          id: candidate._id,
          login: candidate.login,
          firstName:  candidate.firstName,
          lastName:  candidate.lastName
        },
        process.env.SECRET_JWT_KEY,
        {
          expiresIn: "24h",
        }
      );
      res.json({
        success: true,
        token,
        message: "Вы авторизованы",
      });
    } catch (error) {
      return res
      .status(401)
      .json({ error: "Ошибка при входе " + error.message });
    }
  },
};

export default usersController;
