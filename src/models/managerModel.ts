import { Client } from "./clientModel";

export interface Manager {
    id: number;
    fullName: string;
    clients: Client[];
  }