import { Router } from "express";
import { addUserController } from "../controllers/add-user-controller.js";
import { FindUserController } from "../controllers/find-user-controller.js";
import { deleteUserController } from "../controllers/delete-user-controller.js";

const router = new Router();

router.get("/user", FindUserController);
router.post("/user", addUserController);
router.delete("/user", deleteUserController);

export default router;
