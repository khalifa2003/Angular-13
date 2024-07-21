import { Address } from './address';

export interface User {
  _id: string;
  fname: string;
  lname: string;
  slug?: string;
  phone?: string;
  profileImage: string;
  wishlist: string[];
  email: string;
  password: string;
  passwordChangedAt?: Date;
  passwordResetCode?: string;
  passwordResetExpires?: Date;
  passwordResetVerified?: string;
  active: boolean;
  addresses: Address;
}
