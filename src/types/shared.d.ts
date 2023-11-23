type Price = {
  value: number;
  symbol: string;
  currencyISO: string;
  currencyName?: string;
  discount?: number;
};

type LatLong = [number, number];

type Quantity = {
  value: number;
  unit: string;
};
