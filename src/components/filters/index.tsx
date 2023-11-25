import FilterBooleanField from "./FilterBooleanField";
import FilterCheckboxField from "./FilterCheckboxField";
import FilterRangeField from "./FilterRangeField";

export default function FilterField({
  field,
  name,
}: {
  field: FilterField;
  name: string;
}) {
  if (field.type == "boolean") {
    return <FilterBooleanField field={field} fieldName={name} />;
  }

  if (field.type == "checkbox") {
    return <FilterCheckboxField field={field} fieldName={name} />;
  }

  if (field.type == "range") {
    return <FilterRangeField field={field} fieldName={name} />;
  }
}
