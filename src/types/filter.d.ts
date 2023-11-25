type FilterSelectType = "single" | "multi";

/**
 * If not provided they are interpreted as negative and
 * positive infinity, responsibly.
 */
type FilterRange = {
  type: "range";
  title: string;
  min?: number;
  max?: number;
  minPlaceholder?: string;
  maxPlaceholder?: string;
};

type FilterSelect = {
  type: "checkbox";
  title: string;
  selectType: FilterSelectType;
  fields: Record<
    string,
    { title: string; checked?: boolean; available?: number }
  >;
};

type FilterBoolean = {
  type: "boolean";
  title: string;
};

type FilterField = FilterRange | FilterSelect | FilterBoolean;

type Filter = Record<string, FilterField>;
