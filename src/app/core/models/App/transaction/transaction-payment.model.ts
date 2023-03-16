export class SearchRequest {
  public order_number?: string;
  public status?: string;
  public payment_method?: number;
  public payment_channel?: number;
  public transaction_ref?: string;
  public from_date?: string;
  public to_date?: string;
  public page?: number;
  public size?: number;

  constructor(field1?: Partial<SearchRequest>) {
    if (field1) {
      Object.assign(this, field1);
    }
  }
}

export class SearchResponse {
  public merchant_code?: string;
  public merchant_name?: string;
  public transaction_ref?: string;
  public payment_channel?: string;
  public transaction_id?: string;
  public status_name?: string;
  public order_info?: string;
  public order_number?: string;
  public payment_method?: string;
  public transaction_time?: string;
  public transaction_amount?: string;
  public currency?: string;

  constructor(field2?: Partial<SearchResponse>) {
    if (field2) {
      Object.assign(this, field2);
    }
  }
}

export class SearchAdvanceRequest {
  public phone?: string;
  public account?: string;
  public card?: string;
  public issuer?: string;
  public service_type?: string;
  public payment_method?: string;
  public sub_merchant?: string;
  public from_date?: string;
  public to_date?: string;
  public page?: string;
  public size?: string;

  constructor(field3?: Partial<SearchAdvanceRequest>) {
    if (field3) {
      Object.assign(this, field3);
    }
  }
}

export class SearchAdvanceResponse {
  public merchant_code?: string;
  public merchant_name?: string;
  public transaction_ref?: string;
  public payment_channel?: string;
  public transaction_id?: string;
  public status_name?: string;
  public order_info?: string;
  public order_number?: string;
  public payment_type?: string;
  public customer_phone?: string;
  public pan?: string;
  public created_at?: string;
  public amount?: string;
  public currency?: string;

  constructor(field4?: Partial<SearchAdvanceResponse>) {
    if (field4) {
      Object.assign(this, field4);
    }
  }
}

export class TransactionRequest {
  public transaction_id?: string;

  constructor(field5?: Partial<TransactionRequest>) {
    if (field5) {
      Object.assign(this, field5);
    }
  }
}

export class TransactionResponse {
  public error_code: string;
  public error_message: string;
  public data?: TransactionPayment;

  constructor(field6?: Partial<TransactionResponse>) {
    if (field6) {
      Object.assign(this, field6);
    }
  }
}


export class TransactionPayment {
  public merchant_code: string;
  public merchant_name: string;
  public transaction_id: string;
  public status_name: string;
  public payment_method: string;
  public payment_channel: string;
  public transaction_time: string;
  public transaction_amount: number;
  public currency: string;
  public order_reference: string;
  public order_info: string;
  public fee: number;
  public promotion: number;
  public total_amount: number;
  public payment_info: PaymentInfor;
  public transaction_history: TransactionHistory[];
  public refund: PaymentRefund;

  constructor(field7?: Partial<TransactionResponse>) {
    if (field7) {
      Object.assign(this, field7);
    }
  }
}

export class PaymentInfor {
  public customer_name: string;
  public phone: string;
  public payment_channel: string;
  public payment_method: string;
  public pan: string;
  public issuer: string;
  public activated_date: string;

  constructor(field8?: Partial<PaymentInfor>) {
    if (field8) {
      Object.assign(this, field8);
    }
  }
}

export class TransactionHistory {
  public time: string;
  public action: string;

  constructor(field9?: Partial<TransactionHistory>) {
    if (field9) {
      Object.assign(this, field9);
    }
  }
}

export class PaymentRefund {
  public total_amount: number;
  public list_data: ListDataPaymentRefund[];

  constructor(field10?: Partial<PaymentRefund>) {
    if (field10) {
      Object.assign(this, field10);
    }
  }
}

export class ListDataPaymentRefund {
  public refund_ref: string;
  public refund_id: string;
  public refund_amount: number;
  public refund_info: string;
  public refund_status: string;
  public refund_time: string;

  constructor(field11?: Partial<ListDataPaymentRefund>) {
    if (field11) {
      Object.assign(this, field11);
    }
  }
}
