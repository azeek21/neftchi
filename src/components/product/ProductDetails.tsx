import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ProductService from "../../lib/ProductService";
import ProductSupplierService from "../../lib/ProductSupplierService";
import ProductAnalogues from "../productAnalogue";
import ProductSupplierFilter from "../productSupplier/ProductSupplierFilters";
import ProductSupplierList from "../productSupplier/ProductSupplierList";

interface IProductDetails {
  product: ProductType;
}
export default function ProductDetails({ product }: IProductDetails) {
  const [filters, setFilters] = useState<Filter | null>(null);
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    const get = async () => {
      let filters = await ProductSupplierService.getSuppliersFilterForProduct();
      let suppliers = await ProductService.getProductSuppliers(product.id);
      setFilters(filters);
    };
    get();
  }, []);

  return (
    <Stack direction="row" gap="2rem">
      {filters && <ProductSupplierFilter filters={filters} />}
      <Stack width="100%" overflow="hidden" gap="2rem">
        <ProductSupplierList title="Сранение" suppliers={product.suppliers} />
        <ProductAnalogues analogue={product} />
        <ProductSupplierList
          title="Предложения маркетплейса"
          suppliers={product.suppliers}
        />
      </Stack>
    </Stack>
  );
}
