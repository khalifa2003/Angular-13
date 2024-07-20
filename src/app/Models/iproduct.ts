export interface IProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  subcategory: string;
  images: string[];
  category: string;
  subcategories?: string;
  brand: string;
  averageRating?: number;
  reviewCounts?: number;
  ratingsAverage: number;
  ratingsQuantity?: number;
}
