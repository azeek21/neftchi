import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  padding: 0,
  margin: 0,
  border: "1px solid transparent",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:has(.Mui-expanded)": {
    border: "1px solid #c7c7c7",
    borderRadius: "0 0 1rem 1rem",
    overflow: "hidden",
  },
  "&:last-child": {
    borderBottom: "0",
    "&:has(.Mui-expanded)": {
      borderBottom: "1px solid #c7c7c7",
    },
  },
  "&:before": {
    display: "none",
  },
}));

export default Accordion;
