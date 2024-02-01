import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import BaseButton from "@/components/BaseButton";
import MailTemplateHeader from "@/ui/setting/mail-template/PageHeader";
import TemplateList from "@/ui/setting/mail-template/TemplateList";
import { Email, ExpandMore } from "@mui/icons-material";

export default async function Page() {
  return (
    <Box>
      <MailTemplateHeader />
      <TemplateList />
    </Box>
  );
}
