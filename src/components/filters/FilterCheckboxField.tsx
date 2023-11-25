import { ArrowForwardIos } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Collapse,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import filterConfig from "../../config/filterconfigs";

interface IFilterCheckboxFieldProps {
  field: FilterSelect;
  fieldName: string;
  onChange?: (name: string, fields: Record<string, boolean>) => void;
}
export default function FilterCheckboxField({
  field,
  fieldName,
  onChange,
}: IFilterCheckboxFieldProps) {
  const fields = Object.entries(field.fields);
  const [isOpen, setIsOpen] = useState(true);
  const isOverflowing = fields.length > filterConfig.defaultFieldMaxItems;
  const [isFullyExpanded, setIsFullyExpanded] = useState(false);
  const [checkeds, setCheckeds] = useState<Record<string, boolean>>({});

  function toggleOpen() {
    setIsOpen((old) => !old);
  }

  function toggleFullyExpand() {
    setIsFullyExpanded((old) => !old);
  }

  function handleCheck(name: string) {
    setCheckeds((old) => {
      let updated;
      if (field.selectType === "multi") {
        updated = { ...old, [name]: !old[name] };
      } else {
        updated = { [name]: true };
      }
      if (onChange) {
        onChange(fieldName, updated);
      }
      return updated;
    });
  }

  const formElements = useMemo(() => {
    const rendereds = [];
    const limit = isOverflowing
      ? isFullyExpanded
        ? fields.length
        : filterConfig.defaultFieldMaxItems
      : fields.length;
    for (let i = 0; i < limit; i++) {
      let [name, field] = fields[i];

      rendereds.push(
        <Stack
          key={`${name + field.title}`}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            onClick={() => handleCheck(name)}
            control={<Checkbox checked={checkeds[name] || false} name={name} />}
            label={<Typography color="#505050">{field.title}</Typography>}
          />
          {field.available ? (
            <Typography
              color="#f25627"
              fontWeight="500"
              pr="0.5rem"
              onClick={() => handleCheck(name)}
            >
              {field.available}
            </Typography>
          ) : null}
        </Stack>
      );
    }
    return rendereds;
  }, [checkeds, isFullyExpanded]);

  return (
    <Stack>
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
        <Stack>
          {formElements}
          {isOverflowing && (
            <Button
              onClick={toggleFullyExpand}
              variant="text"
              sx={{
                color: "#f36134",
                justifyContent: "start",
                paddingLeft: 0,
                fontSize: "14px",
                width: "max-content",
                textTransform: "none",
              }}
            >
              <Typography fontWeight="500">
                {isFullyExpanded
                  ? "Меньше"
                  : `Ещё ${fields.length - filterConfig.defaultFieldMaxItems}`}
                <ArrowForwardIos
                  sx={{
                    fontSize: "0.8rem",
                    color: "#f36134",
                    ml: "0.5rem",
                    transform: `rotate(${isFullyExpanded ? "-" : ""}90deg)`,
                  }}
                />
              </Typography>
            </Button>
          )}
        </Stack>
      </Collapse>
    </Stack>
  );
}
