import { Group } from "../models/Groups.model.js";
import { User } from "../models/User.model.js";

const groupController = {
  getGroups: async (req, res) => {
    //показ всех групп
    try {
      const group = await Group.find();
      res.json(group);
    } catch (error) {
      return res
        .status(401)
        .json({ error: "Ошибка при получении списка групп" });
    }
  },
  addGroups: async (req, res) => {
    //создание группы
    const { groups } = req.body;
    try {
      const group = await Group.create({
        groups,
      });
      return res.json(group);
    } catch (error) {
      return res.status(401).json({ error: "Ошибка при создании группы" });
    }
  },
  editGroups: async (req, res) => {
    //изменение названия группы
    const groupId = req.params.id;
    const { groups } = req.body;
    try {
      const group = await Group.findByIdAndUpdate(groupId, { groups }, { new: true });

      if (!group) {
        return res.status(404).json({ error: "Группа не найдена" });
    }
      return res.json(group);
    } catch (error) {
      return res.status(401).json({ error: "Ошибка при изменении группы" });
    }
  },
  getGroupsById: async (req, res) => {
    //показ одной группы
    try {
      const group = await Group.findById(req.params.id).populate("users");
      if (!group) {
        return res.status(401).json({ error: "Группа не найдена" });
      }
      return res.json(group);
    } catch (error) {
      return res.status(401).json({ error: "Ошибка при получении группы" });
    }
  },
  deleteGroupById: async (req, res) => {
    //удаление группы
    try {
      const groupId = req.params.id;

      const group = await Group.findById(groupId);
      if (!group) {
        return res.status(404).json({ error: "Группа не найдена" });
      }
      await Group.findByIdAndRemove(groupId);

      return res.json({ message: "Группа успешно удалена" });
    } catch (error) {
      return res.status(401).json({ error: "Ошибка при удалении группы" });
    }
  },
  addUserInGroup: async (req, res) => {
    //добавление пользователя в группу
    try {
      const groupId = req.params.id;
      const userId = req.params.userId;

      const group = await Group.findById(groupId);
      if (!group) {
        return res.status(401).json({ error: "Группа не найдена" });
      }

      const user = await User.findById(userId);
      if (!user) {
        return res.status(401).json({ error: "Пользователь не найден" });
      }

      if (group.users.includes(userId)) {
        return res.status(401).json({ error: "Такой пользователь уже есть в группе" });
      }

      group.users.push(userId);
      await group.save();

      return res.json(group);
    } catch (error) {
      return res
        .status(401)
        .json({ error: "Ошибка при добавлении пользователя в группу" });
    }
  },
  deleteUserFromGroup: async (req, res) => {
    //удаление пользователя из группы
    try {
      const groupId = req.params.id;
      const userId = req.params.userId;

      const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Группа не найдена" });
    }

    const user = await User.findById(userId);
    if (!user || !group.users.includes(userId)) {
      return res.status(404).json({ error: "Пользователь не найден в группе" });
    }

    group.users = group.users.filter((id) => id.toString() !== userId);
    await group.save();

    return res.json({ message: "Пользователь успешно удален из группы" });

    } catch (error) {
      return res
        .status(401)
        .json({ error: "Ошибка при удалении пользователя из группы" });
    }
  },
};

export default groupController;
