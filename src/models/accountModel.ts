export interface Account {
    id: number;
    type: string;
    balance: number;
    overdraftLimit: number; //limite do cheque especial
    clientId: number;
  }