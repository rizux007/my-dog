export interface ProductResponse {
  id: number;
  name: string;
  breed_group: string;
  size: string;
  lifespan: string;
  origin: string;
  temperament: string;
  colors: string[];
  description: string;
  image: string;
}

export interface SingleProductResponse {
  id: number;
  name: string;
  breed_group: string;
  size: string;
  lifespan: string;
  origin: string;
  temperament: string;
  colors: string[];
  description: string;
  image: string;
}
