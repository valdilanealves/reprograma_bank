import { Account } from "../models/accountModel";

export interface PaymentAdapter {
  processPayment(account: Account, amount: number): boolean;
}

export class PixPaymentAdapter implements PaymentAdapter {
  processPayment(account: Account, amount: number): boolean {
    if (account.balance + account.overdraftLimit >= amount) {
      account.balance -= amount;
      return true;
    }
    return false;
  }
}

export class BoletoPaymentAdapter implements PaymentAdapter {
  processPayment(account: Account, amount: number): boolean {
    if (account.balance + account.overdraftLimit >= amount) {
      account.balance -= amount;
      return true;
    }
    return false;
  }
}

