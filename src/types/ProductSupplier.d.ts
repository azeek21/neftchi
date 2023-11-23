// lattitude and longditude

type ProductSupplierAddress = {
  country?: string;
  city?: string;
  latlong?: LatLong;
};

type ProductSupllierShipment = {
  min?: number;
  max?: number;
  timeUnit: string;
};

type ProductSupplierSaleChannel =
  | "API"
  | "Onl"
  | "Off"
  | "MP"
  | "FBY"
  | "FBS"
  | "PRO";

type ProductSupplier = {
  id: string;
  productId: string;
  name: string;
  address?: ProductSupplierAddress;
  available: Quantity;
  websiteUrl?: string;
  price: {
    buy: Price;
    rent: Price;
  };
  shipment: ProductSupllierShipment;
  delivery: number;
  saleType: ProductSupplierSaleChannel;
  afo: number;
};
