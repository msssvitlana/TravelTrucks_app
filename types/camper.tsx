export type GalleryImage = {
  thumb: string;
  original: string;
};

export type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryImage[];
  reviews: Review[];
};

export type CamperListResponse = {
  campers: Camper[];
  filters: Filter;
  favorites: string[];
  page: number;
  total: number;
};

export type Filter = {
  location: string;
  type: string;
  equipment: string[];
};
