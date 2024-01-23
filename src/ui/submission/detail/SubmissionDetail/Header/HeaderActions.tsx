"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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

import { DetailPageParams } from "@/@types/page";

interface Props {}

export default function HeaderActions({}: Props) {
  const { id } = useParams<DetailPageParams>();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex", gap: 1 }}>
        <BaseButton
          variant="contained"
          color="primary"
          startIcon={<CheckCircleOutline />}
          onClick={() => {
            setOpen(true);
            console.log("Yes");
          }}
        >
          진행
        </BaseButton>
        <BaseButton
          variant="outlined"
          color="error"
          startIcon={<HighlightOff />}
          onClick={() => {
            console.log("No");
          }}
        >
          반려
        </BaseButton>
      </Box>

      <BaseModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        size="lg"
        title="Process"
      >
        <Typography sx={{ mb: 1 }}>Comments</Typography>
        <TextField sx={{ width: "100%" }} multiline rows={5} maxRows={6} />
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
    </>
  );
}
