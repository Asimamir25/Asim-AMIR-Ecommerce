interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export const fetchData = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=8");
    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const result: Product[] = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
