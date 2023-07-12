import express from "express";
import { Router } from "express";
import lessonsController from "../controllers/lessons.controller.js";

const router = Router();

router.get("/lessons",  lessonsController.getAllModules);   //получение всех и модулей и уроков
router.post("/lessons", lessonsController.addModule);       //добавление модуля
router.patch("/lessons/:id", lessonsController.addLessonToModule);  // найти модуль по ид и добавить урок
router.get("/lessons/:moduleId/:lessonId", lessonsController. getOneLessonInModule);  //поиск одного урока из модуля

export default router;
