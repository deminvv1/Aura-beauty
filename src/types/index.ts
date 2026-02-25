export interface ServicePanel {
  id: number;
  num: string;
  tag: string;
  title: string;
  titleEm: string;
  desc: string;
  features: string[];
  prices: PriceItem[];
}

export interface Reviews {
  username: string;
  text: string;
  date: string;
}

export interface PriceItem {
  name: string;
  price: string;
}

export interface Window {
  ymaps: any;
}
