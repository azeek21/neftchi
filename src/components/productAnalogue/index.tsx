import { ArrowForwardIos, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProductImageAndName from "../product/ProductImageAndName";

interface IProductAnaloguesProps {
  analogue: ProductType;
}

export default function ProductAnalogues({ analogue }: IProductAnaloguesProps) {
  return (
    <Stack gap="0.5rem">
      <Typography variant="h6">Аналоги</Typography>
      {analogue && (
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
                backgroundColor: "#ffd964",
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
            rows={[analogue] || []}
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
                renderCell: () => <ArrowForwardIos />,
                maxWidth: 60,
              },
              {
                field: "name",
                headerName: "Наименование",
                flex: 1,
                renderCell: ({ row }: { row: ProductType }) => {
                  const { id, brand, name } = row;
                  return (
                    <ProductImageAndName
                      imgUrl="/machine.png"
                      title={`${name} ${brand}`}
                      subTitle={id}
                    />
                    // <Stack gap="0px">
                    //   <Typography>
                    //     {" "}
                    //     {name} {brand}
                    //   </Typography>
                    //   <Typography color="secondary" variant="body1">
                    //     {id}
                    //   </Typography>
                    // </Stack>
                  );
                },
                sortable: false,
                minWidth: 400,
              },
              {
                field: "brand",
                headerName: "Бренд",
                flex: 1,
                minWidth: 90,
                sortable: false,
              },
              {
                field: "country",
                headerName: "Страна",
                flex: 1,
                minWidth: 90,
                valueGetter: () => "Китай",
                sortable: false,
              },
            ]}
          />
        </Box>
      )}
    </Stack>
  );
}
