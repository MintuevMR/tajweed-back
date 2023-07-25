import { Router } from "express";
import groupController from "../controllers/groups.controller.js";

const router = Router();

router.get("/groups", groupController.getGroups);
router.post("/groups", groupController.addGroups);
router.get("/group/:id", groupController.getGroupsById);
router.delete("/group/:id", groupController.deleteGroupById);
router.post("/group/:id/add-user/:userId", groupController.addUserInGroup);
router.delete("/group/:id/delete-user/:userId", groupController.deleteUserFromGroup);
router.patch("/group/:id", groupController.editGroups);

export default router;
