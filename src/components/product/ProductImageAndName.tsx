import { Box, Stack, Typography } from "@mui/material";

interface IProductImageAndName {
  imgUrl: string;
  title: string;
  subTitle: string;
}
export default function ProductImageAndName(product: IProductImageAndName) {
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
        <Typography fontWeight={"bold"}>{product.title}</Typography>
        <Typography color="secondary">{product.subTitle}</Typography>
      </Stack>
    </Stack>
  );
}
