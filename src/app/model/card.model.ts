export interface Card {
  id: string | number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export enum Brand {
  APPLE = 'Apple',
  SAMSUNG = 'Samsung',
  OPPO = 'Oppo',
  HUAWEI = 'Huawei'
}

export enum Category {
  SMARTPHONES = 'Smartphones',
  LAPTOPS = 'laptops'
}
