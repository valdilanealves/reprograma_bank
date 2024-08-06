// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`${req.method} ${req.url} - ${err.message}`);

  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong. Please try again later." });
};
