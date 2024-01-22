import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import BaseButton from "@/components/BaseButton";

import { ExpandMore } from "@mui/icons-material";
import List from "./List";

export default function TemplateList() {
  // ! This is server component used to fetch data

  return (
    <Box>
      <List />
    </Box>
  );
}
