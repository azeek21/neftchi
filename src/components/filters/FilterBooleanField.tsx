import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";

interface IFilterBooleanFieldProps {
  field: FilterBoolean;
  fieldName: string;
  onChange?: (name: string, checked: boolean) => void;
}
export default function FilterBooleanField({
  field,
  fieldName,
  onChange,
}: IFilterBooleanFieldProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((old) => {
      let res = !old;
      if (onChange) {
        onChange(fieldName, res);
      }
      return res;
    });
  }

  return (
    <FormControlLabel
      onClick={handleCheck}
      key={`${fieldName}`}
      control={<Checkbox checked={isChecked} name={fieldName} />}
      label={
        <Typography color="#505050" fontSize="14px" fontWeight="500">
          {field.title}
        </Typography>
      }
    />
  );
}
