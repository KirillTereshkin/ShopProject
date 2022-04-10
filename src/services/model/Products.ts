export enum CollectionType {
  winter = "Зимнняя коллекция",
  spring = "Весенняя коллекция",
  summer = "Летняя коллекция",
  autumn = "Осенняя коллекция",
  allSeazon = "Всесезон",
}

export enum ProductType {
  dress = "dress",
  skirt = "skirt",
  pants = "pants",
  blouse = "blouse",
  cardigan = "cardigan",
  tshirt = "tshirt",
  hclothes = "hclothes",
  other = "other",
}

export enum ProductGender {
  man = "man",
  woman = "woman",
  children = "children",
}

export interface Product {
  collection: CollectionType;
  description: string;
  isSale: boolean;
  previewImage: string;
  price: number;
  productType: ProductType;
  salePrice: number;
  sizes: number[];
  title: string;
  type: ProductGender;
}

export type ProductResponse = Record<string, Product>;
