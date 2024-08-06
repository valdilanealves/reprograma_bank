import { Account } from "../models/accountModel";
import { BoletoPaymentAdapter, PaymentAdapter } from "../adapters/paymentAdapter";

export class PaymentService {
  static processPayment(accountId: any, amount: any, arg2: BoletoPaymentAdapter) {
    throw new Error("Method not implemented.");
  }
  private accounts: Account[];

  constructor(accounts: Account[]) {
    this.accounts = accounts;
  }

  processPayment(accountId: number, amount: number, paymentAdapter: PaymentAdapter): boolean {
    const account = this.accounts.find(acc => acc.id === accountId);
    if (!account) {
      throw new Error(`Account with ID ${accountId} not found`);
    }
    const isSuccess = paymentAdapter.processPayment(account, amount);
    if (!isSuccess) {
      throw new Error("Payment failed due to insufficient funds or limit");
    }
    return true;
  }
}

// logger.error('Erro ao processar pagamento:', error);