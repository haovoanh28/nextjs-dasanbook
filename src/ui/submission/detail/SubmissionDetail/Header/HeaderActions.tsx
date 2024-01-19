"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BaseButton from "@/components/BaseButton";
import { CheckCircleOutline, HighlightOff } from "@mui/icons-material";

export default function HeaderActions() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <BaseButton
        variant="contained"
        color="primary"
        startIcon={<CheckCircleOutline />}
        onClick={() => {
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
  );
}
