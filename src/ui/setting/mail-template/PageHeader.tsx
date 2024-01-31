"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PageHeader from "@/components/PageHeader";
import { Email } from "@mui/icons-material";

export default function MailTemplateHeader() {
  const onAdd = () => {};

  return (
    <PageHeader pageTitle="Mail Template" pageIcon={Email} onAdd={onAdd} />
  );
}
