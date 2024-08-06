import { Account } from "../models/accountModel";

export class AccountService {
  private accounts: Account[] = [];

  openAccount(account: Account): void {
    this.accounts.push(account);
  }

  closeAccount(accountId: number): void {
    this.accounts = this.accounts.filter(acc => acc.id !== accountId);
  }

  modifyAccountType(accountId: number, newType: string): void {
    const account = this.accounts.find(acc => acc.id === accountId);
    if (account) account.type = newType;
  }
}