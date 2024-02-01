"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FileItem from "@/components/FileItem";

import { IdName } from "@/@types/base";

interface Props {
  fileList: IdName[];
}

export default function Attachments({ fileList }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      {fileList.map((file) => (
        <FileItem key={file.id} name={file.name} />
      ))}
    </Box>
  );
}
