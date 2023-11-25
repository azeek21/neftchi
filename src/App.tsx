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
import { useEffect, useState } from "react";
import Product from "./components/product";
import ProductService from "./lib/ProductService";

interface IProductImageAndName {
  imgUrl: string;
  title: string;
  subTitle: string;
}

function ProductImageAndName(product: IProductImageAndName) {
  return (
    <Stack
      flexDirection="row"
      gap="1rem"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={90} height={60} borderRadius={"10px"} overflow={"hidden"}>
        <img
          src={product.imgUrl}
          alt={product.title}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Stack>
        <Typography fontWeight={"bold"}>Xmachine Ytype</Typography>
        <Typography color="secondary">Xmachine Ytype</Typography>
      </Stack>
    </Stack>
  );
}

interface IProductInfo {
  quantity: number;
  unit: string;
  available: number;
  hasDocs: boolean;
  interchangeAble: boolean;
  origin: string;
  state: string;
  useSelected: number;
}
function ProductInfo(product: any) {
  return (
    <Stack alignItems="center" ml="auto" flexDirection="row" gap="0.8rem">
      <Box pr="2rem">
        <Button
          variant="outlined"
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          {product.quantity}
        </Button>
      </Box>

      <Button
        variant="outlined"
        // color="secondary"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <SwapHorizontalIcon color={false ? "secondary" : "inherit"} />
      </Button>

      <Button
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        Addfile
      </Button>
      <Button
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        шт
      </Button>
      <Button
        sx={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
        variant="outlined"
        // color="secondary"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        10
      </Button>

      <Button
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        Оригинал
      </Button>
      <Button
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        Новое
      </Button>
      <Button
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        122
      </Button>

      <Button
        sx={{ textTransform: "none" }}
        variant="outlined"
        color="success"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        0
      </Button>
    </Stack>
  );
}

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
          items.map((item) => (
            <Product
              key={item.id}
              expanded={current === item.id}
              product={item}
              onClick={() => {
                console.log(item.id, current);
                setCurrent((old) => (old === item.id ? "" : item.id));
              }}
            />
          ))}
      </List>
    </Container>
  );
}

export default App;
