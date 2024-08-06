import { Router } from "express";
import { payWithPix, payWithBoleto } from "../controllers/paymentController";
import { validatePayment } from "../middleware/validatePayment";

const router = Router();

router.post("/payments/pix", validatePayment, payWithPix);
router.post("/payments/boleto", validatePayment, payWithBoleto);

export default router;
