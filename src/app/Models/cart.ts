import { IProduct } from './iproduct';

export interface Cart {
  _id: string;
  cartItems: [
    { product: IProduct; quantity: number; price: number; _id: string }
  ];
  totalCartPrice: number;
  user: string;
}
