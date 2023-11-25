import { AccordionDetails, AccordionProps } from "@mui/material";
import { Accordion, AccordionSummary } from "../accordion";
import ProductInfo from "./ProductBaseInfo";
import ProductDetails from "./ProductDetails";
import ProductImageAndName from "./ProductImageAndName";

interface IProductProps extends AccordionProps {
  expanded?: boolean;
  product: ProductType;
}
export default function Product({
  expanded,
  product,
  ...props
}: Omit<IProductProps, "children">) {
  return (
    <Accordion {...props} expanded={expanded}>
      <AccordionSummary sx={{ backgroundColor: expanded ? "#CBDDFF" : "none" }}>
        <ProductImageAndName
          imgUrl="./machine.png"
          title={product.name}
          subTitle={product.brand}
        />
        <ProductInfo productInfo={product.stats} />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#f5f6f8",
          borderTop: "1px solid #c7c7c7",
          padding: "2rem",
        }}
        onClick={(ev) => {
          ev.stopPropagation();
          ev.preventDefault();
        }}
      >
        <ProductDetails product={product} />
      </AccordionDetails>
    </Accordion>
  );
}
