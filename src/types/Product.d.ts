type ProductAnalogue = "analogue" | "original";
type ProductState = "new" | "used" | "broken";

type ProductStatsInfo = {
  karma: number;
  priorityKarma: boolean;
  interchangeable: boolean;
  certified: boolean;
  quantity?: ProductQuantity;
  analogue: ProductAnalogue;
  state?: ProductState;
};

type ProductPrice = {
  value: number;
  symbol: string;
  currencyISO: string;
  currencyName?: string;
  discount?: number;
};

type ProductQuantity = {
  value: number;
  unit: string;
};

type ProductType = {
  id: string;
  name: string;
  brand: string;
  model: string;
  imgUrl: string;
  suppliers?: ProductSupplier[]; // here
  stats?: ProductStatsInfo;
};
