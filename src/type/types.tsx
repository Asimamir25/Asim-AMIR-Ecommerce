export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
};
export type Cart = {
  productId: number;
  quantity: number;
};
