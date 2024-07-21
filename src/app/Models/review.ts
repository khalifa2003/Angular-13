import { User } from './user';

export interface Review {
  _id: string;
  title: string;
  ratings: number;
  user: User;
  product: string;
}
