import { Account } from "./accountModel";

export interface Client {
    id: number;
    name: string;
    accounts: Account[];
  }