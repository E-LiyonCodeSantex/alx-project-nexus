export interface ProductImage {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface ProductCards {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  available: boolean;
  initial_price: number; 
  created_at: string;
  updated_at: string;
  brand: Brand;               
  category: Category;
  category_id: number;
  images: ProductImage[];  
}
