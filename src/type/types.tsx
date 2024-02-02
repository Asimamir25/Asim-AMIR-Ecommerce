export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  productId: number;
};
export type Cart = {
  productId: number;
  quantity: number;
  title: string;
  category: string;
  price: number;
  image: string;
  id: number;
  cartItems: [];
};
