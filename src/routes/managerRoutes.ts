import { Router } from "express";
import { addManager, removeManager, addClient, removeClient } from "../controllers/managerController";

const router = Router();

router.post("/managers", addManager);
router.delete("/managers/:id", removeManager);
router.post("/managers/:managerId/clients", addClient);
router.delete("/managers/:managerId/clients/:clientId", removeClient);

export default router;