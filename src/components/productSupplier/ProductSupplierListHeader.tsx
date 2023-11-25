import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Checkbox, FormControlLabel, Stack } from "@mui/material";

interface IProductSUpplierListHeaderProps {
  fields: Record<string, { title: string; width?: number; minWidth?: number }>;
}
export default function ProductSUpplierListHeader({
  fields,
}: IProductSUpplierListHeaderProps) {
  return (
    <Stack
      bgcolor="#7c7c7c"
      borderRadius="0.5rem"
      direction="row"
      alignItems="center"
      p="0.5rem 1.5rem"
      justifyContent="space-between"
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={
              <CheckBoxOutlineBlankIcon
                color="secondary"
                fontSize="medium"
                sx={{ background: "white", borderRadius: "0.3rem" }}
              />
            }
          />
        }
        label
      />
      {Object.entries(fields).map(([name, field]) => (
        <p>{field.title}</p>
      ))}
    </Stack>
  );
}
