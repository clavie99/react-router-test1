export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  category: string;
  inStock: boolean;
  rating?: number;
  reviews?: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

export interface ProductsPageData {
  products: Product[];
  categories: string[];
}