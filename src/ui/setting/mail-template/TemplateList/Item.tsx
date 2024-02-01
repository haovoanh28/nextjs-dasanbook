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

import { MailTemplateListItem } from "@/@types/mail-template/list";

interface Props {
  item: MailTemplateListItem;
}

export default function Item({ item }: Props) {
  return (
    <Accordion>
      <Box sx={FLEX_BETWEEN_STYLES}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {item.title}
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

      <AccordionDetails>{item.content}</AccordionDetails>
    </Accordion>
  );
}
