import { Button, Stack, Typography } from "@mui/material";
import FilterField from "../filters";

interface IProductSupplierFilters {
  filters: Filter;
}
export default function ProductSupplierFilter({
  filters,
}: IProductSupplierFilters) {
  return (
    <Stack
      width="260px"
      bgcolor={"white"}
      borderRadius="20px"
      p="25px 20px"
      border="1px solid #eff0f4"
      gap="10px"
    >
      <Typography variant="h6">Фильтр</Typography>
      {Object.entries(filters).map(([name, field]) => (
        <FilterField key={name + field.title} field={field} name={name} />
      ))}
      <Button type="reset" variant="contained">
        Отчистить фильтр
      </Button>
    </Stack>
  );
}
