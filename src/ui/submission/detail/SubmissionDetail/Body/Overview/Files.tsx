"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FileItem from "@/components/FileItem";

export default function Files() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <FileItem name="file1.pdf" />
      <FileItem name="file2.pdf" />
      <FileItem name="file3Fz.pdf" />
    </Box>
  );
}
