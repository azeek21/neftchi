import { AccordionProps, AccordionDetails, Typography } from "@mui/material";
import { Accordion, AccordionSummary } from "../accordion";
import ProductImageAndName from "./ProductImageAndName";
import ProductInfo from "./ProductBaseInfo";

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
        <ProductImageAndName imgUrl="./machine.png" title="s" subTitle="sdf" />
        <ProductInfo productInfo={product.stats} />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#f5f6f8",
          borderTop: "1px solid #c7c7c7",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          accusantium mollitia est nemo illum, excepturi deleniti quisquam
          recusandae consequuntur, adipisci eius iure inventore perferendis
          laboriosam aliquam unde obcaecati magnam dolorem nobis beatae
          perspiciatis corporis accusamus quasi sed. Quis fugit pariatur
          eligendi ipsum corporis vel soluta aut mollitia, aperiam ex placeat
          odit labore at commodi repudiandae tempore corrupti! Laboriosam, odio,
          libero deleniti est incidunt amet ut obcaecati et minima, iste illum
          at tempore? Tempora obcaecati reiciendis dolores! Eveniet facilis,
          possimus commodi laudantium minus odio accusantium deleniti eaque
          expedita modi? Culpa accusamus id eum sed animi repellendus voluptates
          necessitatibus magnam excepturi ipsum!
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
