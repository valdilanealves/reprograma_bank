import { Account } from "../models/accountModel";

export class AccountFactory {
  static createAccount(id: number, type: string, balance: number, overdraftLimit: number, clientId: number): Account {
    return { id, type, balance, overdraftLimit, clientId };
  }
}
