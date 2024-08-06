import { Request, Response } from "express";
import { ManagerService } from "../services/managerService";

const managerService = new ManagerService();

export const addManager = (req: Request, res: Response) => {
  managerService.addManager(req.body);
  res.status(201).send("Manager added");
};

export const removeManager = (req: Request, res: Response) => {
  managerService.removeManager(Number(req.params.id));
  res.status(200).send("Manager removed");
};

export const addClient = (req: Request, res: Response) => {
  managerService.addClient(Number(req.params.managerId), req.body);
  res.status(201).send("Client added");
};

export const removeClient = (req: Request, res: Response) => {
  managerService.removeClient(Number(req.params.managerId), Number(req.params.clientId));
  res.status(200).send("Client removed");
};