import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import BaseButton from "@/components/BaseButton";
import BaseIconButton from "@/components/BaseIconButton";

import { ExpandMore, Edit, Delete } from "@mui/icons-material";
import { FLEX_BETWEEN_STYLES } from "@/const/styles";

interface Props {
  id: string;
  title: string;
  content: string;
}

export default function Item({ id, content, title }: Props) {
  return (
    <Accordion>
      <Box sx={FLEX_BETWEEN_STYLES}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <Box>
          <BaseIconButton tooltip="Edit">
            <Edit fontSize="small" color="success" />
          </BaseIconButton>
          <BaseIconButton tooltip="Delete">
            <Delete fontSize="small" color="error" />
          </BaseIconButton>
        </Box>
      </Box>

      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
}
