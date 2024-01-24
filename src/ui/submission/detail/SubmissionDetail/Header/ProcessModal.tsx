"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import BaseButton from "@/components/BaseButton";
import BaseModal from "@/components/BaseModal";
import {
  CheckCircleOutline,
  HighlightOff,
  ErrorOutline,
} from "@mui/icons-material";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
}

export default function ProcessModal({ open, onClose, onSave }: Props) {
  const Footer = useMemo(() => {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <BaseButton variant="outlined">Save & Send Mail</BaseButton>
        <BaseButton variant="contained" onClick={onSave}>
          Save
        </BaseButton>
      </Box>
    );
  }, []);

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      size="lg"
      title="Process"
      footer={Footer}
    >
      <Typography sx={{ mb: 1 }}>Comments</Typography>
      <TextField sx={{ width: "100%" }} multiline rows={5} />
      <Box
        sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}
        color="warning.main"
      >
        <ErrorOutline fontSize="small" />
        <Typography variant="body2">
          Status will changed to Process after save
        </Typography>
      </Box>
    </BaseModal>
  );
}
