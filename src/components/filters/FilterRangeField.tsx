import { ArrowForwardIos } from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

interface IFilterRangeFieldProps {
  field: FilterRange;
  fieldName: string;
  onChange?: (name: string, fields: { min: number; max: number }) => void;
}

export default function FilterRangeField({
  field,
  fieldName,
  onChange,
}: IFilterRangeFieldProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [range, setRange] = useState({ min: 0, max: 0 });
  function toggleOpen() {
    setIsOpen((old) => !old);
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const { value, name } = ev.target;
    if (name) {
      setRange((old) => {
        let res = {
          ...old,
          [name]: Number(value.replace(/[^0-9]/g, "") || 0),
        };
        if (onChange) {
          onChange(fieldName, range);
        }
        return res;
      });
    }
  }

  return (
    <Stack gap="1rem">
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">{field.title}</Typography>
        <IconButton onClick={toggleOpen}>
          <ArrowForwardIos
            fontSize="small"
            sx={{ transform: `rotate(${isOpen ? "" : "-"}90deg)` }}
          />
        </IconButton>
      </Stack>
      <Collapse in={isOpen}>
        <Stack gap="10px">
          <TextField
            name="min"
            value={range.min ? range.min.toLocaleString("ru") : ""}
            onChange={handleChange}
            placeholder={
              field.minPlaceholder ?? field.min?.toLocaleString("ru")
            }
          />
          <TextField
            name="max"
            onChange={handleChange}
            value={range.max ? range.max.toLocaleString("ru") : ""}
            placeholder={
              field.maxPlaceholder ?? field.max?.toLocaleString("ru")
            }
          />
        </Stack>
      </Collapse>
    </Stack>
  );
}
