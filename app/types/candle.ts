export type CandleStatus = "in-stock" | "sold-out" | "preorder";

export interface Candle {
  name: string;
  description: string;
  price: number;
  status: CandleStatus;
  image: string;
  ingredients?: string;
}