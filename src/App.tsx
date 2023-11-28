import SwapHorizontalIcon from "@mui/icons-material/SwapHoriz";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Product from "./components/product";
import ProductService from "./lib/ProductService";

function App() {
  const [items, setItems] = useState<ProductType[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const getem = async () => {
      let prods = await ProductService.getAllProducts();
      setItems(prods);
    };
    getem();
  }, []);

  const toggle = useCallback((id: string) => {
    setCurrent(old => old === id ? "-1" : id);
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "35px 50px",
      }}
    >
      <Typography variant="h6">Товары заявки</Typography>
      <List>
        <Divider />
        {items &&
          !!items.length &&
          items.map((item) => 
            <Product
            key={item.id}
            expanded={current === item.id}
            product={item}
            toggle={toggle}
          />
        )}
      </List>
    </Container>
  );
}

export default App;
