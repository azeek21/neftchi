import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SwapHorizontalIcon from "@mui/icons-material/SwapHoriz";
import { Box, Button, Stack, Typography } from "@mui/material";

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
        color={info.interchangeable ? "inherit" : "secondary"}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <SwapHorizontalIcon
          color={!info.interchangeable ? "secondary" : "inherit"}
        />
      </Button>

      <Button
        variant="outlined"
        color={info.certified ? "inherit" : "secondary"}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <NoteAddIcon color={!info.certified ? "secondary" : "inherit"} />
      </Button>
      <Button
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        {info.quantity?.unit}
      </Button>
      <Button
        sx={{
          width: "90px",
        }}
        variant="outlined"
        // color="secondary"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <Typography>{info.quantity?.value || "-"}</Typography>
      </Button>

      <Button
        variant="outlined"
        sx={{
          width: "150px",
          justifyContent: "start",
        }}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        {info.analogue === "analogue" ? "Аналог" : "Оригинал"}
      </Button>
      <Button
        sx={{
          width: "150px",
          justifyContent: "start",
        }}
        variant="outlined"
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        {info.state == "new" && "Новое"}
        {info.state == "used" && "Б/У"}
        {info.state == "broken" && "На запчасти"}
      </Button>
      <Button
        variant="outlined"
        color={!info.certified ? "success" : "inherit"}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        {!info.certified ? (info.quantity?.value || 0) * 2 : "0"}
      </Button>

      <Button
        sx={{ textTransform: "none" }}
        variant="outlined"
        color={(info.quantity?.value || 0) % 3 == 0 ? "inherit" : "secondary"}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        {(info.quantity?.value || 0) % 3 == 0
          ? "0"
          : (info.quantity?.value || 0) * 5}
      </Button>
    </Stack>
  );
}
