import { Request, Response } from "express";
import { PaymentService } from "../services/paymentService";
import { PixPaymentAdapter, BoletoPaymentAdapter } from "../adapters/paymentAdapter";
import logger from "../config/logger";

export const payWithPix = (req: Request, res: Response) => {
  try {
    const { accountId, amount } = req.body;
    if (!accountId || typeof amount !== 'number') {
      logger.warn("Invalid input data for PIX payment");
      return res.status(400).send({ error: "Invalid input data" });
    }

    PaymentService.processPayment(accountId, amount, new PixPaymentAdapter());
     
    res.status(200).send({ message: "Payment processed" });

    res.status(400).send({ error: "Payment failed due to insufficient funds" });

  } catch (error) {
    logger.error(`Error processing PIX payment:`);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const payWithBoleto = (req: Request, res: Response) => {
  try {
    const { accountId, amount } = req.body;
    
    if (!accountId || typeof amount !== 'number') {
      return res.status(400).send({ error: "Invalid input data" });
    }

    const success = PaymentService.processPayment(accountId, amount, new BoletoPaymentAdapter());

    if (typeof success === 'boolean' && success) {
      res.status(200).send({ message: "Payment successful via Boleto" });
    } else if (typeof success === 'boolean' && !success) {
      res.status(400).send({ error: "Payment failed due to insufficient funds" });
    } else {
      // Caso `success` não seja booleano, assume-se que ocorreu um erro interno
      res.status(500).send({ error: "Unexpected response from payment service" });
    }
  } catch (error) {
    console.error("Error processing Boleto payment:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
