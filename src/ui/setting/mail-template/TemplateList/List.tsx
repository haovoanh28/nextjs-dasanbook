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

import Item from "./Item";

import { faker } from "@faker-js/faker";

const TEMP_TEMPLATE_LIST = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  title: faker.company.name(),
  content: faker.lorem.paragraph(),
}));

export default function List() {
  return (
    <Box>
      {TEMP_TEMPLATE_LIST.map(({ id, title, content }) => (
        <Item key={id} id={id} title={title} content={content} />
      ))}
    </Box>
  );
}
