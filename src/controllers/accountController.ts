import { Request, Response } from "express";
import { AccountService } from "../services/accountService";

const accountService = new AccountService();

export const openAccount = (req: Request, res: Response) => {
  accountService.openAccount(req.body);
  res.status(201).send("Account opened");
};

export const closeAccount = (req: Request, res: Response) => {
  accountService.closeAccount(Number(req.params.id));
  res.status(200).send("Account closed");
};

export const modifyAccountType = (req: Request, res: Response) => {
  accountService.modifyAccountType(Number(req.params.id), req.body.type);
  res.status(200).send("Account type modified");
};

