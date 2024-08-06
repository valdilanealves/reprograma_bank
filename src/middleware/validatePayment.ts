import { Request, Response, NextFunction } from "express";

export const validatePayment = (req: Request, res: Response, next: NextFunction) => {
  const { accountId, amount } = req.body;
  if (typeof accountId !== "number" || typeof amount !== "number" || amount <= 0) {
    return res.status(400).send({ error: "Invalid input data" });
  }
  next();
};