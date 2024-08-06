import { Router } from "express";
import { openAccount, closeAccount, modifyAccountType } from "../controllers/accountController";

const router = Router();

router.post("/accounts", openAccount);
router.delete("/accounts/:id", closeAccount);
router.put("/accounts/:id/type", modifyAccountType);

export default router;