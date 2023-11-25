import { CheckBoxOutlineBlank } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

interface IProductSupplierList {
  suppliers?: ProductSupplier[];
  title: string;
}
export default function ProductSupplierList({
  suppliers,
  title,
}: IProductSupplierList) {
  return (
    <Stack gap="0.5rem">
      <Typography variant="h6">{title}</Typography>
      {suppliers && suppliers.length > 0 && (
        <Box maxHeight={530}>
          <DataGrid
            rowHeight={62}
            disableColumnFilter
            disableColumnMenu
            disableColumnSelector
            hideFooter
            sx={{
              fontWeight: "500",
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#c7c7c7",
                borderRadius: "0.5rem",
                mb: "10px",
              },
              "& .MuiDataGrid-virtualScrollerRenderZone": {
                gap: "5px",
              },
              "& .MuiDataGrid-cell": {
                borderBottomColor: "transparent",
              },
              "& .MuiDataGrid-row": {
                backgroundColor: "white",
                borderRadius: "0.5rem",
              },
            }}
            rows={suppliers || []}
            columns={[
              {
                field: "actions",
                type: "actions",
                renderHeader: () => (
                  <IconButton>
                    <CheckBoxOutlineBlank
                      sx={{
                        color: "white",
                        bgcolor: "white",
                        borderRadius: "0.3rem",
                      }}
                    />
                  </IconButton>
                ),
                getActions: () => [<CheckBoxOutlineBlank />],
                sortable: false,
                maxWidth: 60,
              },
              {
                field: "name",
                headerName: "Компания",
                flex: 1.5,
                renderCell: ({ row }: { row: ProductSupplier }) => {
                  const { address, websiteUrl, name } = row;
                  return (
                    <Stack gap="0px">
                      <Link
                        href={websiteUrl || ""}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </Link>
                      <Typography color="secondary" variant="body1">
                        {address?.city}
                      </Typography>
                    </Stack>
                  );
                },
                sortable: false,
              },
              {
                field: "available",
                headerName: "Дос-но",
                flex: 1,
                renderCell: ({ row }: { row: ProductSupplier }) => (
                  <Typography variant="body1">{`${row.available.value}  ${row.available.unit}`}</Typography>
                ),
                maxWidth: 80,
                sortable: false,
              },
              {
                field: "saleType",
                headerName: "Продажа",
                flex: 1,
                maxWidth: 90,
                sortable: false,
              },
              {
                field: "afo",
                headerName: "AFO %",
                flex: 1,
                renderCell: ({ value }) => {
                  return (
                    <Button
                      variant="outlined"
                      sx={{
                        color: "blue",
                        width: "60px",
                        overflow: "hidden",
                      }}
                    >
                      {value}
                    </Button>
                  );
                },
                maxWidth: 100,
                sortable: false,
              },
              {
                field: "price",
                headerName: "Цена ед.б/ НДС",
                flex: 1.5,
                renderCell: ({ value }) => {
                  let buyPrice = value.buy;
                  return (
                    <Stack>
                      <Typography>
                        {buyPrice.value.toLocaleString("ru")} {buyPrice.symbol}
                      </Typography>
                      {buyPrice.discount && (
                        <Typography color="secondary" variant="body2">
                          {buyPrice.discount.toLocaleString("ru")}{" "}
                          {buyPrice.symbol}
                        </Typography>
                      )}
                    </Stack>
                  );
                },
                maxWidth: 150,
                sortable: false,
              },
              {
                field: "pricerent",
                headerName: "Рент",
                flex: 1,
                renderCell: ({ row }) => {
                  let rentPrice: Price = row.price.rent;
                  return (
                    <Typography color="#ff3232">
                      {rentPrice.value} {rentPrice.symbol}{" "}
                    </Typography>
                  );
                },
                maxWidth: 120,
                sortable: false,
              },
              {
                field: "delivery",
                headerName: "Дос-ка",
                flex: 1,
                maxWidth: 100,
                sortable: false,
                renderCell: ({ value }) => (
                  <Button variant="outlined" sx={{ color: "blue" }}>
                    {value}
                  </Button>
                ),
              },
              {
                field: "shipment",
                headerName: "Отгрузка",
                flex: 1,
                maxWidth: 100,
                sortable: false,
                renderCell: ({ value }) => (
                  <Stack>
                    {value.min && (
                      <Typography>
                        {value.min} {value.timeUnit}
                      </Typography>
                    )}
                    {value.max && (
                      <Typography color="secondary">
                        {value.max}
                        {value.timeUnit}
                      </Typography>
                    )}
                  </Stack>
                ),
              },
            ]}
          />
        </Box>
      )}
    </Stack>
  );
}
