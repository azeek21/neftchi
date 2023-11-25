import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { ArrowForwardIos } from "@mui/icons-material";

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIos />} {...props} />
))(() => ({
  flexDirection: "row-reverse",
  padding: "0 1.5rem 0 0.5rem",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    display: "flex",
    width: "100%",
    marginLeft: "1rem",
  },
}));

export default AccordionSummary;
