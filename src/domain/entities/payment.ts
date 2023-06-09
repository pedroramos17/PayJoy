import { Entity } from "./../../core/domain/Entity";

type PaymentProps = {
  paymentAmount: number;
  paymentMethod: string;
  paymentStatus: string;
};

export class Payment extends Entity<PaymentProps> {
  private constructor(props: PaymentProps, id?: string) {
    super(props, id);
  }

  get id() {
    return this._id;
  }

  static create(props: PaymentProps, id?: string) {
    const payment = new Payment(props, id);

    return payment;
  }
}
