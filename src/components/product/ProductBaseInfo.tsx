import SwapHorizontalIcon from "@mui/icons-material/SwapHoriz";
import { Box, Button, Stack } from "@mui/material";

interface IProductInfoProps {
  productInfo?: ProductStatsInfo;
}

export default function ProductInfo({ productInfo: info }: IProductInfoProps) {
  if (!info) {
    return <></>;
  }

  return (
    <Stack alignItems="center" ml="auto" flexDirection="row" gap="0.8rem">
      <Box pr="2rem">
        <Button
          variant="outlined"
          color={info.priorityKarma ? "success" : "inherit"}
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          {info.priorityKarma ? "+" : ""}
          {info.karma}
        </Button>
      </Box>

      <Button
        variant="outlined"
        color={info.certified ? "inherit" : "secondary"}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <SwapHorizontalIcon color={!info.certified ? "secondary" : "inherit"} />
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
