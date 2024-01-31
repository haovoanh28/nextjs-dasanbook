"use client";

import { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import BaseButton from "@/components/BaseButton";
import ProcessModal from "./ProcessModal";

import {
  CheckCircleOutline,
  HighlightOff,
  ErrorOutline,
} from "@mui/icons-material";

import { MANUSCRIPT_URL } from "@/const/url";

import { DetailPageParams } from "@/@types/page";

interface Props {}

export default function HeaderActions({}: Props) {
  const router = useRouter();
  const { id } = useParams<DetailPageParams>();

  const [open, setOpen] = useState(false);

  const onSave = () => {
    setOpen(false);
    router.push(`${MANUSCRIPT_URL}/all`);
  };

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

      <ProcessModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        onSave={onSave}
      />
    </>
  );
}
